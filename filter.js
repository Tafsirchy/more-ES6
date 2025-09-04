const numbers = [4, 8, 12, 3, 5, 16, 45, 10];

const greaterThan10 = numbers.filter( x => x > 10);

console.log(greaterThan10);

const lessThan10 = numbers.filter( x =>{
    const result = x < 10;
    return result;
})

console.log(lessThan10);