//calculate the average of numbers from 1 to 100
let sum = 0;
let count = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
    count++;
}
let average = sum / count;
console.log(average);