// Given two arrays of arr1 and arr2, the task is to calculate the product of the maximum element of the first array arr1,
//  and minimum element of the second array arr2.

// Examples :

// Input : arr1 = [5, 7, 9, 3, 6, 2],  arr2 = [1, 2, 6, 1, 9]
// Output : 9
// Explanation: The max in arr1 is 9. The min element in arr2 is 1. The product is 9*1 = 9.



function maxMinProduct(arr1, arr2) {
    let maxElement = Math.max(...arr1); // Find max in arr1
    let minElement = Math.min(...arr2); // Find min in arr2

    return maxElement * minElement; // Return their product
}

// Example usage
let arr1 = [5, 7, 9, 3, 6, 2];
let arr2 = [1, 2, 6, 1, 9];

console.log(maxMinProduct(arr1, arr2)); // Output: 9
