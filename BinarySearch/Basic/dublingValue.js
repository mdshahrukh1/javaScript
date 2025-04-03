// Given an array and an integer B, traverse the array (from the beginning) and if the element in array is B,
// double B and continue traversal. Find the value of B after the complete traversal.

// Example 1:

// Input:
// N = 5, B = 2
// arr[] = {1 2 3 4 8}
// Output: 16
// Explanation: B is initially 2. We get 2 at
// the 1st index, hence B becomes 4. 
// Next, we get B at the 3rd index, hence B 
// becomes 8. Next, we get B at 4-th index, 
// hence B becomes 16.



function solve(arr,b,n){
    //code here
    for(let i = 0; i < n; i++){
        if(arr[i] === b){
            b *= 2;
        }
    }
    return b;
 }