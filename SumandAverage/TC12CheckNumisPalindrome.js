//check whether a given number is palindrome or not
let num = 13431, temp = num, rev = 0;
while (temp > 0) {
    rev = rev * 10 + temp % 10;
    temp = Math.floor(temp / 10);
}
if (num === rev) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}