// You are given a number n. You need to find nth Fibonacci number.
// F(n)=F(n-1)+F(n-2); where F(1)=1 and F(2)=1

// Example 1:

// Input:
// n = 1
// Output: 1
// Explanation: The first fibonacci
//  number is 1


function fibonacci(n)
    {
        // code here
        if(n === 1 || n == 0){
            return n;
        }
        return this.fibonacci(n-1) + this.fibonacci(n-2);
    }