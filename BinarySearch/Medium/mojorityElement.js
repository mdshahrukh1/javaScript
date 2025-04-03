// Given an array arr. Find the majority element in the array. If no majority exists, return -1.

// A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

// Examples:

// Input: arr[] = [3, 1, 3, 3, 2]
// Output: 3
// Explanation: Since, 3 is present more than n/2 times, so it is the majority element.


function majorityElement(arr) {
    let count = 0, candidate = -1;

    // Step 1: Find a candidate for majority element
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Step 2: Verify if the candidate is actually a majority
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(arr.length / 2) ? candidate : -1;
}

// Test cases
console.log(majorityElement([3, 1, 3, 3, 2])); // Output: 3
console.log(majorityElement([7])); // Output: 7
console.log(majorityElement([2, 13])); // Output: -1


function majorityElement(arr) {
    let freq = {}, n = arr.length;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > n / 2) return num; // Return early if majority found
    }

    return -1;
}

// Test cases
console.log(majorityElement([3, 1, 3, 3, 2])); // Output: 3
console.log(majorityElement([7])); // Output: 7
console.log(majorityElement([2, 13])); // Output: -1
