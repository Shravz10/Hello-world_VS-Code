//print numbers from 1 to N and skip numbers which are divisible by 4
let n = 40;
for (let i = 1; i <= n; i++) {
    if (i % 4 === 0) {
        continue;   // skip numbers divisible by 4
    }
    console.log(i);
}


