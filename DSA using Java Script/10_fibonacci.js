function fibo(n) {
    if (n == 0) {  // if(n == 0 || n == 1) { return n; }
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}

let n = 5;
console.log(fibo(6));