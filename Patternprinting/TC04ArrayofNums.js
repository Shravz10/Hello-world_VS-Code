//Print array of numbers and find largest number in the array
let arr = [10, 15, 8, 16, 12, 20];
let largest = arr[0];
console.log("Array of numbers:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number in the array is:", largest);