// Given an array of positive integers arr[], return the second largest element from the array.
// If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

function getSecondLargest(arr) {
    // Code Here
    let secondLargest = -Infinity;
    let largest = -Infinity;

    for(const key of arr){
        if(key > largest){
        secondLargest = largest;
        largest = key;
        }
        else if(key > secondLargest && key < largest){
            secondLargest = key;
        }
    }
    return secondLargest === -Infinity ? -1: secondLargest
}

let arr = [12, 35, 1, 10, 34, 1];

console.log(getSecondLargest(arr));
// Output: 34