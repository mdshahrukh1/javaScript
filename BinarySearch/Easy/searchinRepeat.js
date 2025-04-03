// Given a sorted array arr and an integer k, find the position(0-based indexing) at which k is present in the array using binary search.

// Note: If multiple occurrences are there, please return the smallest index.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5], k = 4
// Output: 3
// Explanation: 4 appears at index 3.
// Input: arr[] = [11, 22, 33, 44, 55], k = 445
// Output: -1
// Explanation: 445 is not present.
// Input: arr[] = [1, 1, 1, 1, 2], k = 1
// Output: 0
// Explanation: 1 appears at index 0.


function binarysearch(arr, k) {
    // Code Here
    let n = arr.length;
    let s = 0;
    let e = n-1;
    let result = -1;
    
    while( s <= e){
        let m = Math.floor((s+e)/2);
        
        if(arr[m] === k){
            result = m;
            e = m-1;
        }
        else if(k > arr[m]){
            s = m + 1;
        }
        else{
            e = m - 1;
        }
    }
    return result;
}
