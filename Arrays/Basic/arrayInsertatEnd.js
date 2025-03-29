// Insertion is a basic but frequently used operation. Arrays in most languages can not be dynamically shrinked or expanded.
//  Here, we will work with such arrays and try to insert an element at the end of the array.

// You need to modify the given array arr. 
// The size of the array is given by sizeOfArray. You need to insert an element at the end. 
// Array already have the sizeofarray -1 elements. Find Kth Rotation

// Examples :

// Input: sizeOfArray = 6, arr[] = {1, 2, 3, 4, 5}, element = 90
// Output: 1 2 3 4 5 90
// Explanation: After inserting 90 at the end, we have array elements as 1 2 3 4 5 90.



function insertAtEnd(arr, sizeOfArray, element) {
    if (arr.length === sizeOfArray - 1) {
        arr.push(element); // Insert element at the end
    }
    return arr;
}

// Example usage
let sizeOfArray = 6;
let arr = [1, 2, 3, 4, 5]; // Already has sizeOfArray - 1 elements
let element = 90;

console.log(insertAtEnd(arr, sizeOfArray, element)); 
// Output: [1, 2, 3, 4, 5, 90]




function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // Handle cases where k > n
    return [...arr.slice(k), ...arr.slice(0, k)];
}

// Example usage
let array = [1, 2, 3, 4, 5, 90];
let k = 2;

console.log(rotateArray(array, k));
// Output: [3, 4, 5, 90, 1, 2]
