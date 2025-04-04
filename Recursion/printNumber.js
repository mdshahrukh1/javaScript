// Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes n as a parameter and prints the number from 1 to n recursively.

// Note: Don't print any newline, it will be added by the driver code.

// Examples:

// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10

class Solution {
    printNos(n) {
        // code here
        this.helper(1, n);
        console.log("");
    }
    
    helper(current, n){
        if(current > n) return;
        
        process.stdout.write(current + " ");
        this.helper(current + 1, n);
    }
}
