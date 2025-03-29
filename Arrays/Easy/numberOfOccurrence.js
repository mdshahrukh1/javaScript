// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

// Examples :

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: target = 2 occurs 4 times in the given array so the output is 4.
// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: target = 4 is not present in the given array so the output is 0.

function countFreq(arr, target) {
    // your code here
    let count = 0;
    for(let key of arr){
        if(key === target){
            count++;
        }
    }
    return count;
}

let arr = [1, 1, 2, 2, 2, 2, 3];
let target = 2;

console.log(countFreq(arr, target));