const numbers = [4, 8, 12, 3, 5, 16, 45, 10];

const firstEven = numbers.find( x => x%2 === 0);
console.log(firstEven);

const firstEven2 = numbers.find( x=>{
    const result = x%2 === 0;
    return result;
})

console.log(firstEven2);