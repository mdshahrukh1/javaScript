function sumOfDigits(n) {
    if (n == 0) {
        return 0;
    }
    return n%10 + sumOfDigits(parseInt(n/10));
}

let n = 5413;
console.log(sumOfDigits(n));

// console.log(parseInt(99.99));
// console.log(Math.floor(99.99));
// console.log(Math.ceil(99.99));