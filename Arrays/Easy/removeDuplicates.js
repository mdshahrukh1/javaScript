// Given a sorted array arr. Return the size of the modified array which contains only distinct elements.
// Note:
// 1. Don't use set or HashMap to solve the problem.
// 2. You must return the modified array size only where distinct elements are present and modify the original array such 
// that all the distinct elements come at the beginning of the original array.

// Examples :

// Input: arr = [2, 2, 2, 2, 2]
// Output: [2]
// Explanation: After removing all the duplicates only one instance of 2 will remain 
// i.e. [2] so modified array will contains 2 at first position and you should return 1 after modifying the array, 
// the driver code will print the modified array elements.
// Input: arr = [1, 2, 4]
// Output: [1, 2, 4]
// Explation:  As the array does not contain any duplicates so you should return 3.



function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let index = 0; // Position for unique elements

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i]; // Move the unique element forward
        }
    }

    return index + 1; // Size of the modified array
}

// Example Usage:
let arr1 = [2, 2, 2, 2, 2];
let size1 = removeDuplicates(arr1);
console.log(arr1.slice(0, size1)); // Output: [2]
console.log(size1); // Output: 1

let arr2 = [1, 2, 4];
let size2 = removeDuplicates(arr2);
console.log(arr2.slice(0, size2)); // Output: [1, 2, 4]
console.log(size2); // Output: 3
