// Maximum product of two numbers
// Difficulty: BasicAccuracy: 48.92%Submissions: 45K+Points: 1
// Given an array arr of non-negative integers, return the maximum product of two numbers possible.

// Example:

// Input: arr[] = [1, 4, 3, 6, 7, 0] 
// Output: 42
// Explanation: 6 and 7 have the maximum product.




function maxProduct(arr) {
        // code here
        if (arr.length < 2) return null;

    let max1 = 0, max2 = 0;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 * max2;

    }
