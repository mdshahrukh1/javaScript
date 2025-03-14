// let n = 10;//Print first 10 numbers for fibbonacci series
// let a = 0;
// let b = 1;
// let temp;//third number
// console.log(a,b);
// for (let i = 2; i <= n; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;  
//     console.log(temp);          
// }

function printFibonacci(limit) {
    let a = 0, b = 1;
    while (a < limit) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

// Example usage:
printFibonacci(10);

function printFibonacci(limit) {
    let a = 0, b = 1;
    for (let i = 0; a < limit; i++) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

// Example usage:
printFibonacci(10);

