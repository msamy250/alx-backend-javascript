export default function getStudentsByLocation(students, city){
  students.filter((student) => student.city === city);
}