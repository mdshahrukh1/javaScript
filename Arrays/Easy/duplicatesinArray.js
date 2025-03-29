// Given an array arr of integers, find all the elements that occur more than once in the array. 
// If no element repeats, return an empty array.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.
// Input: arr[] = [0, 3, 1, 2] 
// Output: [] 
// Explanation: There is no repeating element in the array, so the output is empty.


function findDuplicates(arr) {
    let frequency = {};
    let duplicates = [];
    
    // Count occurrences of each element
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Find elements that occur more than once
    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(Number(key));
        }
    }
    
    return duplicates;
}

// Example cases
console.log(findDuplicates([2, 3, 1, 2, 3])); // Output: [2, 3]
console.log(findDuplicates([0, 3, 1, 2]));   // Output: []
