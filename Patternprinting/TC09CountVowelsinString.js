//Count how many vowels are present in string using loops and conditionals
let str = "Automation";
let count = 0;
for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if ( char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
}
console.log("Number of vowels in the string: " + count);