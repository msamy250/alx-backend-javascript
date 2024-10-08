export default function getListStudents() {
  if (!Array.isArray(studientList)){
    return [];
  }

  return (studientList.map((x) => x.id));
}
