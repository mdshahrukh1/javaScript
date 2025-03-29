// Find Transition Point
// Difficulty: EasyAccuracy: 37.9%Submissions: 272K+Points: 2Average Time: 20m
// Given a sorted array, arr[] containing only 0s and 1s, find the transition point, i.e., 
// the first index where 1 was observed, and before that, only 0 was observed.  If arr does not have any 1, 
// return -1. If array does not have any 0, return 0.

// Examples:

// Input: arr[] = [0, 0, 0, 1, 1]
// Output: 3
// Explanation: index 3 is the transition point where 1 begins.
// Input: arr[] = [0, 0, 0, 0]
// Output: -1
// Explanation: Since, there is no "1", the answer is -1.
// Input: arr[] = [1, 1, 1]
// Output: 0
// Explanation: There are no 0s in the array, so the transition point is 0, 
// indicating that the first index (which contains 1) is also the first position of the array.
// Input: arr[] = [0, 1, 1]
// Output: 1
// Explanation: Index 1 is the transition point where 1 starts, and before it, only 0 was observed.


function findTransitionPoint(arr) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === 1) {
            result = mid; // Possible transition point
            right = mid - 1; // Search in the left half for the first occurrence
        } else {
            left = mid + 1; // Search in the right half
        }
    }
    
    return result;
}

// Example test cases
console.log(findTransitionPoint([0, 0, 0, 1, 1])); // Output: 3
console.log(findTransitionPoint([0, 0, 0, 0])); // Output: -1
console.log(findTransitionPoint([1, 1, 1])); // Output: 0
console.log(findTransitionPoint([0, 1, 1])); // Output: 1
