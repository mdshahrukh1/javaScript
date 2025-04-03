// Given an array arr[] and an integer k where k is smaller than the size of the array,
//  the task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output:  7
// Explanation: 3rd smallest element in the given array is 7.



function kthSmallest(arr, k) {
    let maxElement = Math.max(...arr); // Find max element in array
    let count = new Array(maxElement + 1).fill(0); // Frequency array

    // Count occurrences of each element
    for (let num of arr) {
        count[num]++;
    }

    // Traverse the count array to find the kth smallest element
    let position = 0;
    for (let i = 0; i <= maxElement; i++) {
        if (count[i] > 0) {
            position += count[i];
            if (position >= k) return i; // kth smallest element found
        }
    }
    return -1; // This case should never be reached if k is valid
}

// Example Usage:
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
console.log(kthSmallest([2, 3, 1, 20, 15], 4)); // Output: 15



function quickSelect(arr, left, right, k) {
    let pivot = partition(arr, left, right);
    
    if (pivot === k - 1) return arr[pivot];
    if (pivot > k - 1) return quickSelect(arr, left, pivot - 1, k);
    return quickSelect(arr, pivot + 1, right, k);
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

function kthSmallest(arr, k) {
    return quickSelect(arr, 0, arr.length - 1, k);
}

// Example Usage:
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
console.log(kthSmallest([2, 3, 1, 20, 15], 4)); // Output: 15
