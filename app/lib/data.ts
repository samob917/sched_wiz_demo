import { sql } from '@vercel/postgres';
import {
  Student
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchStudents() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching revenue data...');

    const data = await sql<Student>`SELECT * FROM students`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchStudentById(id: string) {
    noStore();
    try {
      const data = await sql<Student>`
        SELECT
          students.id,
          students.year,
          students.completed_courses,
          students.preferences,
          students.valid_courses,
          students.remaining_reqs
        FROM students
        WHERE students.id = ${id};
      `;
  
      const student = data.rows.map((student) => ({
        ...student,
      }));
  
      console.log(student);
      return student[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
}