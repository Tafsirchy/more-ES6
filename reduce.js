const numbers = [4, 5, 6, 7, 12, 15];

let sum = 0;

for (const number of numbers){
    sum = sum + number
}
console.log(sum)

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total)