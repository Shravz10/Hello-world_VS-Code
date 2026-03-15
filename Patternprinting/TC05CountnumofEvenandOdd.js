//count how many even and odd numbers are in the array
let arr = [10, 13, 15, 7, 8, 16, 12, 20];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);