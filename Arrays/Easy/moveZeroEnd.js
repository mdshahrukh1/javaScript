// Move All Zeroes to End
// Difficulty: EasyAccuracy: 45.51%Submissions: 284K+Points: 2Average Time: 15m
// You are given an array arr[] of non-negative integers. 
// Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. 
// The operation must be performed in place, meaning you should not use extra space for another array.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.


function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;  // Pointer to track the position of non-zero elements
    
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {  
            // Swap current element with element at nonZeroIndex
            [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
            
            // Move nonZeroIndex forward
            nonZeroIndex++;  
        }
    }
    
    return arr;
}

// Example test cases
console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveZeroesToEnd([10, 20, 30])); // [10, 20, 30]
console.log(moveZeroesToEnd([0, 0])); // [0, 0]
