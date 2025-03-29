// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). 
// This array represents a permutation of the integers from 1 to n with one element missing. 
// Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.


function missingNumber(arr) {
    // code here
    let n = arr.length+1;
    let total = n* (n + 1)/2; // Expected sum
    //console.log(total);

    // let l = arr.length; //defining array lenght
    let arraysum = 0;  //defining sum of array

    for (let i = 0; i < n-1; i++) {
     arraysum += arr[i];
    }

    let ans = total - arraysum;
    return ans;
}

let arr = [8, 2, 4, 5, 3, 7, 1];
// Output: 6
console.log(missingNumber(arr));