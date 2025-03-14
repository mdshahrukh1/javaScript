// // console.log(Math.pow(2,5));

// x = 2;
// n = 3;
// //Calculate x raised to power n (2^3)
// let ans = 1;
// for (let i = 0; i < n; i++) {
//     ans *= x; // ans = ans * x;
// }
// console.log(ans);

function power(x,n) {
    if (n == 0) {
        return 1;
    }
    return x * power(x,n-1);
}
let x = 2;
let n = 5;
console.log(power(x,n));