// Smallest Positive Missing

// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.


function findSmallestMissingPositive(arr) {
    const set = new Set();
    
    // Add only positive numbers to the set
    for (let num of arr) {
        if (num > 0) {
            set.add(num);
        }
    }
    
    // Start checking from 1 upwards
    let smallestMissing = 1;
    while (set.has(smallestMissing)) {
        smallestMissing++;
    }
    
    return smallestMissing;
}

// Test cases
console.log(findSmallestMissingPositive([2, -3, 4, 1, 1, 7])); // Output: 3
console.log(findSmallestMissingPositive([5, 3, 2, 5, 1]));    // Output: 4
console.log(findSmallestMissingPositive([-8, 0, -1, -4, -3])); // Output: 1
