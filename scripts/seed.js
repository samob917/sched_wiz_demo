const { db } = require('@vercel/postgres');
const {
  students
} = require('../app/lib/placeholder-data');


async function seedStudents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "student" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS students (
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        year VARCHAR(255) NOT NULL,
        completed_courses JSON,
        preferences JSON,
        valid_courses JSON,
        remaining_reqs JSON,
        penalties JSON
      );
    `;

    console.log(`Created "students" table`);
    console.log(students)

    // Insert data into the "users" table
    const insertedStudents = await Promise.all(
      students.map(async (student) => {
        console.log(student);
        return client.sql`
        INSERT INTO students (id, year, completed_courses, preferences, valid_courses, remaining_reqs, penalties)
        VALUES (${student.id}, ${student.year}, ${student.completed_courses}, ${student.preferences}, ${student.valid_courses}, ${student.remaining_reqs}, ${students.penalties})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedStudents.length} students`);

    return {
      createTable,
      users: insertedStudents,
    };
  } catch (error) {
    console.error('Error seeding students:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedStudents(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});