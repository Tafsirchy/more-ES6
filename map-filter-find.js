const students = [
    {id: 21, name: 'Oli', marks: 65},
    {id: 22, name: 'Jabed', marks: 75},
    {id: 23, name: 'Rahim', marks: 55},
    {id: 24, name: 'Karim', marks: 85},
    {id: 25, name: 'Rahman', marks: 95}
]

// map
const names = students.map(student => student.name);
// const names = students.map(student => student.marks*0.75);
console.log(names);

// filter
const goodStudents = students.filter(student => student.marks > 70);
console.log(goodStudents);

// find
const firstStudent = students.find(student => student.marks > 70);
console.log(firstStudent);