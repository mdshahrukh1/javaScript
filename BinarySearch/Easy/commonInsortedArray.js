// You are given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// If there are no such elements return an empty array. In this case, the output will be -1.

// Note: can you handle the duplicates without using any additional Data Structure?

// Examples :

// Input: arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: [20, 80]
// Explanation: 20 and 80 are the only common elements in arr, brr and crr.





function binarySearch(arr, x) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === x) return true;
        else if (arr[mid] < x) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

function findCommonElements(arr1, arr2, arr3) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if ((i === 0 || arr1[i] !== arr1[i - 1]) &&
            binarySearch(arr2, arr1[i]) &&
            binarySearch(arr3, arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

// Example usage
console.log(findCommonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120])); // Output: [20, 80]





function findCommonElements(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    const result = [];
    let lastAdded = null;
    
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            if (arr1[i] !== lastAdded) {
                result.push(arr1[i]);
                lastAdded = arr1[i];
            }
            i++;
            j++;
            k++;
        } else {
            let minValue = Math.min(arr1[i], arr2[j], arr3[k]);
            if (arr1[i] === minValue) i++;
            if (arr2[j] === minValue) j++;
            if (arr3[k] === minValue) k++;
        }
    }
    
    return result;
}

// Example usage
console.log(findCommonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120])); // Output: [20, 80]


// function findCommonElements(arr1, arr2, arr3) {
//     let i = 0, j = 0, k = 0;
//     let result = [];
    
//     while (i < arr1.length && j < arr2.length && k < arr3.length) {
//         if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
//             if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//                 result.push(arr1[i]);
//             }
//             i++;
//             j++;
//             k++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         } else if (arr2[j] < arr3[k]) {
//             j++;
//         } else {
//             k++;
//         }
//     }
    
//     return result;
// }

// // Example usage
// console.log(findCommonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120])); // Output: [20, 80]
