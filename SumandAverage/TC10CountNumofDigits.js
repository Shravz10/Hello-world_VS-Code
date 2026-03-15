//Count the number of digits in a given number
let num = 1356789, count = 0;
while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}
console.log(count);