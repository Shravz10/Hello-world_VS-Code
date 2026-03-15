//Generate Fibonacci series up to N
let N = 10, a = 0, b = 1;
console.log("Fibonacci series:");
for (let i = 0; i <= N; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}
