//Reverse a given number
let num = 1234567, rev = 0;
while (num > 0) {
    rev = rev * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log(rev);