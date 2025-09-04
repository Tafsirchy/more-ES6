const numbers = [4, 8, 12, 3, 5];
// const doubled = []

// for(const num of numbers){
//     const result = num*2;
//     doubled.push(result);
// }

// const doubleIt = (x) => x*2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(x => x*2);
const fiveTimes = numbers.map(x => x*5);
const squared = numbers.map( x => x*x);

const friends  = ['Jabed', 'Karim', 'Rahim', 'Rahman'];

const nameLengths = friends.map( name => name.length)
const fristLetter = friends.map(name => name[0])
const fristLetterNumber = friends.map(name => name[0].length)
// single parameter 
const result = numbers.map(num =>{
    console.log(num*3);
})
// multiple parameter
const result2 = numbers.map((num, index) =>{
    console.log(num*index);
    return num*index;
})

console.log(result2)


// console.log(doubled);
// console.log(fiveTimes);
// console.log(squared);
// console.log(nameLengths);
// console.log(fristLetter);
// console.log(fristLetterNumber);