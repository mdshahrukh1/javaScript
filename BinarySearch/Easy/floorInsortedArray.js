// Given a sorted array arr[] (with unique elements) and an integer k, 
// find the index (0-based) of the largest element in arr[] that is less than or equal to k.
// This element is called the "floor" of k. If such an element does not exist, return -1.

// Examples

// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 0
// Output: -1
// Explanation: No element less than 0 is found. So output is -1.
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 5
// Output: 1
// Explanation: Largest Number less than 5 is 2 , whose index is 1.



function findFloorIndex(arr, k) {
    let left = 0, right = arr.length - 1;
    let floorIndex = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] <= k) {
            floorIndex = mid; // Update floor index
            left = mid + 1;   // Move right to find a larger possible floor
        } else {
            right = mid - 1;  // Move left to find a smaller element
        }
    }
    
    return floorIndex;
}

// Example usage
console.log(findFloorIndex([1, 2, 8, 10, 11, 12, 19], 0));  // Output: -1
console.log(findFloorIndex([1, 2, 8, 10, 11, 12, 19], 5));  // Output: 1
console.log(findFloorIndex([1, 2, 8, 10, 11, 12, 19], 10)); // Output: 3
