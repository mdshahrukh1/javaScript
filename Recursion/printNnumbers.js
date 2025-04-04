// Given an positive integer n, print numbers from 1 to n without using loops.

// Implement the function printTillN() to print the numbers from 1 to n as space-separated integers.

// Examples

// Input: n = 5
// Output: 1 2 3 4 5
// Explanation: We have to print numbers from 1 to 5.
// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10
// Explanation: We have to print numbers from 1 to 10.


class Solution{
    printTillN(n){
        //code here
        this.helper(1, n);
        console.log("");
    }
    
    helper(current, n){
        if(current > n) return;
        
        process.stdout.write(current + " ");
        this.helper(current + 1, n);
    }
}
