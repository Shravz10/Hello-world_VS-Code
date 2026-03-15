//print prime numbers from 1 to 100
for (let i = 1; i <=100; i++) {
    let isprime = true;
    if (i <= 1) {
        isprime = false;
    }else {
    for ( let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            isprime = false;
            break;
        }
    }

}
if  (isprime) {
        console.log(i);
    }
}