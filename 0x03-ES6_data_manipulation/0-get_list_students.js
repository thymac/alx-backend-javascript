/**
 * Function to get a list of students.
 * @returns {Object[]} An array of student objects, each containing id, firstName, and location attributes.
 */
export default function getListStudents() {
  // Array of student objects with id, firstName, and location attributes
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}
