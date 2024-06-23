const students = [
  { id: 1, name: "Emmanuel Peters", grades: [85, 92, 88] },
  { id: 2, name: "Yetunde Babalola", grades: [85, 92, 88] },
  { id: 3, name: "Mubaraq Yusuf", grades: [95, 90, 93] },
  { id: 1, name: "Clement Chukwu", grades: [70, 80, 65] },
];

// Function To Calculate Average Grade

function calculateAverage(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function calculateAverageGrades(students) {
  return students.map(student => ({
    id: student.id,
    name: student.name,
    averageGrade: calculateAverage(student.grades)
  }));
}
const averageGrades = calculateAverageGrades(students);
console.log('Average Grades:', averageGrades);


// Function to find the top student
function findTopStudent(students) {
  const studentsWithAverageGrades = calculateAverageGrades(students);
  return studentsWithAverageGrades.reduce((topStudent, currentStudent) => 
    currentStudent.averageGrade > topStudent.averageGrade ? currentStudent : topStudent, studentsWithAverageGrades[0]);
}
const topStudent = findTopStudent(students);
console.log('Top Student:', topStudent);

// Sort Student By Average Grade
function sortStudentsByGrade(students) {
  const studentsWithAverageGrades = calculateAverageGrades(students);
  return studentsWithAverageGrades.sort((a, b) => b.averageGrade - a.averageGrade);
}
const sortedStudents = sortStudentsByGrade(students);
console.log('Sorted Students by Average Grade:', sortedStudents);