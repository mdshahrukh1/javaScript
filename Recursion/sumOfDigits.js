// You are given a number n. You need to find the sum of digits of n.

// Example 1:

// Input:
// n = 1
// Output: 1
// Explanation: Sum of digit of 1 is 1.


function sumOfDigits(n)
    {
        if(n === 0){
            return 0;
        }
        return n%10 + sumOfDigits(parseInt(n/10));
    }