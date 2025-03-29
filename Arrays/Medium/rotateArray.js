// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. 
// Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Examples :

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.

function rotateLeft(arr, d) {
    let n = arr.length;
    d = d % n; // Handle cases where d > n

    for (let i = 0, j = d - 1; i < j; i++, j--) [arr[i], arr[j]] = [arr[j], arr[i]]; // Reverse first d elements
    for (let i = d, j = n - 1; i < j; i++, j--) [arr[i], arr[j]] = [arr[j], arr[i]]; // Reverse remaining elements
    for (let i = 0, j = n - 1; i < j; i++, j--) [arr[i], arr[j]] = [arr[j], arr[i]]; // Reverse whole array
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
rotateLeft(arr1, 2);
console.log(arr1); // Output: [3, 4, 5, 1, 2]

let arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
rotateLeft(arr2, 3);
console.log(arr2); // Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]

let arr3 = [7, 3, 9, 1];
rotateLeft(arr3, 9);
console.log(arr3); // Output: [3, 9, 1, 7]
