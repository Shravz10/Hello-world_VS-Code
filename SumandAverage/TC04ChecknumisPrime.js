//check given number is prime or not
let num = 29;
let isPrime = true;
for (let i = 2; i <=num / 2; i++) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
console.log(isPrime);