const student = {
    name: 'Jabed', 
    'home-address': 'Dhaka',
    1: 50,
    marks: 85
};

console.log(student);

//dot notation

const studentName = student.name;
const studentMarks = student.marks;
// const studentOne = student.1 //not possible to give output by dot notation


console.log(studentName);
// console.log(studentOne);


// bracket notation

// const studentOne = student['1'];
// console.log(studentOne);

const studentName2 = student['name']
console.log(studentName2);

const studentHomeAddress = student['home-address']
console.log(studentHomeAddress);

for(const key in student){
    const value = student[key];// for value
    console.log(key, value);
}

const propName = 'marks';
console.log(student[propName]);