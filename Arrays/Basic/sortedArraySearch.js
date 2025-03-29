// Given an array, arr[] sorted in ascending order and an integer k. Return true if k is present in the array, otherwise, false.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 6], k = 6
// Output: true
// Exlpanation: Since, 6 is present in the array at index 4 (0-based indexing), output is true.


function searchInSorted(arr, k) {
    // your code here
    for(let key of arr){
        if(key === k){
            return true;
        }
    }
    return false;
}