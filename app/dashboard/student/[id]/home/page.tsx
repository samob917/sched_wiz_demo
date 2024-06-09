
import { fetchStudentById} from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Invoices',
};
type CompletedCourses = {
    [key: string]: any; // Adjust this type based on the actual structure of your JSON
  };
type Preferences = {
    [key: string]: any; // Adjust this type based on the actual structure of your JSON
  };
type ValidCourses = {
    [key: string]: any; // Adjust this type based on the actual structure of your JSON
  };
type RemainingReqs = {
    [key: string]: any; // Adjust this type based on the actual structure of your JSON
  };
  
type Student = {
    id: string;
    completed_courses?: CompletedCourses;
    preferences?: Preferences;
    valid_courses?: ValidCourses;
    remaining_reqs?: RemainingReqs;
  };
 
export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;
    const [student] = await Promise.all([
        fetchStudentById(id),
    ]);

    if (!student) {
        notFound();
    }
    const completedCourses = student.completed_courses as CompletedCourses;
    const prefs = student.preferences as Preferences;
    const validCourses = student.valid_courses as ValidCourses;
    const remainingReqs = student.remaining_reqs as RemainingReqs;
    
  return (
    <main>
      <div>
      <h1>{student.id}</h1>
      <div>
        <h2>Completed Courses</h2>
      {student.completed_courses ? (
        <div>
          {/* Loop through keys and display key-value pairs */}
          {Object.keys(student.completed_courses).map((subject) => (
            <div key={subject}>
              <p><strong>{subject}:</strong> {completedCourses[subject]} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Student Preferences</h2>
      {student.preferences ? (
        <div>
          {/* Loop through keys and display key-value pairs */}
          {Object.keys(student.preferences).map((subject) => (
            <div key={subject}>
              <p><strong>{subject}:</strong> {prefs[subject]} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Valid Courses</h2>
      {student.valid_courses ? (
        <div>
          {/* Loop through keys and display key-value pairs */}
          {Object.keys(student.valid_courses).map((subject) => (
            <div key={subject}>
              <p><strong>{subject}:</strong> {validCourses[subject]} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Degree Requirements Remaining</h2>
      {student.remaining_reqs ? (
        <div>
          {/* Loop through keys and display key-value pairs */}
          {Object.keys(student.remaining_reqs).map((subject) => (
            <div key={subject}>
              <p><strong>{subject}:</strong> {remainingReqs[subject]} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      </div>
      
    </div>
    </main>
  );
}