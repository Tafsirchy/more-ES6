const student = {
    name: 'Jabed', 
    'home-address': 'Dhaka',
    1: 50,
    family: {
        title: 'Chowdhury Family',
        // mother: {
        //     name: 'Chamely'
        // }
    },
    marks: 85
};

// console.log(student.name);
// console.log(student.family.title);
// console.log(student.family.mother.name);// make an error for name of mother object
console.log(student.family.mother?.name); //code will run but take it as undefined
