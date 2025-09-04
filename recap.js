const student = {name: 'Jabed', marks: 85};
const friends = ['Rahim', 'Karim', 'Jabed', 'Rahman'];

const tax = 1000;

const dynamicText = `My Tax: ${tax} and marks ${student.marks*1.2} and has friend: ${friends[0]}`;

// destructing 

// const {marks} = student;
// console.log(marks);

const {marks: totalMarks, age = 23} = student
console.log(totalMarks, age);

// array destructuring 
const [firstFriend, secondFriend] = friends;

// spread operator

const newFriends = [...friends, 'Rahman'];

