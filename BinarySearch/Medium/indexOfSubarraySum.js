// Given an array arr[] containing only non-negative integers, 
// your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target.
// You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

// Note: If no such array is possible then, return [-1].

// Examples:

// Input: arr[] = [1, 2, 3, 7, 5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.


function findSubarrayWithSum(arr, target) {
    let left = 0, sum = 0;
    
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        
        while (sum > target && left <= right) {
            sum -= arr[left];
            left++;
        }
        
        if (sum === target) {
            return [left + 1, right + 1]; // 1-based index
        }
    }
    
    return [-1];
}

// Example usage:
console.log(findSubarrayWithSum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]





function findSubarrayWithSum(arr, target) {
    let sum = 0, left = 0;
    
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        
        while (sum > target) sum -= arr[left++];
        
        if (sum === target) return [left + 1, right + 1];
    }
    
    return [-1];
}

// Example usage:
console.log(findSubarrayWithSum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]
