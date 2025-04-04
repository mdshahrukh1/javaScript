// You are given an integer n, return the fibonacci series till the nth(0-based indexing) term. 
// Since the terms can become very large return the terms modulo 109+7.

// Example 1:

// Input:
// n = 5
// Output:
// 0 1 1 2 3 5
// Explanation:
// 0 1 1 2 3 5 is the Fibonacci series up to the 5th term.
// Example 2:

// Input:
// n = 10
// Output:
// 0 1 1 2 3 5 8 13 21 34 55
// Explanation:
// 0 1 1 2 3 5 8 13 21 34 55 is the Fibonacci series up to the 10th term.

function fibonacciSeries(n) {
    const MOD = 1000000007;
    let memo = new Array(n + 1).fill(-1); // Memoization array

    function fib(i) {
        if (i === 0) return 0;
        if (i === 1) return 1;
        if (memo[i] !== -1) return memo[i]; // Return stored result if available

        return memo[i] = (fib(i - 1) + fib(i - 2)) % MOD; // Store and return result
    }

    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(fib(i)); // Compute each Fibonacci number recursively with memoization
    }
    return result;
}

// Example Usage:
console.log(fibonacciSeries(5));  // Output: [0, 1, 1, 2, 3, 5]
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
