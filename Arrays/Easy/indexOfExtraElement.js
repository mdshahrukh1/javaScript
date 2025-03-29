// You have given two sorted arrays arr1[] & arr2[] of distinct elements. The first array has one element extra added in between. Return the index of the extra element.

// Note: 0-based indexing is followed.

// Examples

// Input: a[] = [2,4,6,8,9,10,12], b[] = [2,4,6,8,10,12]
// Output: 4
// Explanation: In the first array, 9 is extra added and it's index is 4.
// Input: a[] = [3,5,7,8,11,13], b[] = [3,5,7,11,13]
// Output: 3
// Explanation: In the first array, 8 is extra and it's index is 3.
// Input: a[] = [3,5], b[] = [3]
// Output: 1
// Explanation: In the first array, 5 is extra and it's index is 1.


function findExtraElementIndex(arr1, arr2) {
    let left = 0, right = arr2.length;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // If elements are the same, move to the right half
        if (arr1[mid] === arr2[mid]) {
            left = mid + 1;
        } else {
            // Otherwise, move to the left half
            right = mid - 1;
        }
    }
    return left;
}

// Test cases
console.log(findExtraElementIndex([2, 4, 6, 8, 9, 10, 12], [2, 4, 6, 8, 10, 12])); // Output: 4
console.log(findExtraElementIndex([3, 5, 7, 8, 11, 13], [3, 5, 7, 11, 13])); // Output: 3
console.log(findExtraElementIndex([3, 5], [3])); // Output: 1
