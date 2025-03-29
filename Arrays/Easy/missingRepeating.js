// Missing And Repeating
// Difficulty: EasyAccuracy: 24.83%Submissions: 562K+Points: 2Average Time: 30m
// Given an unsorted array arr of positive integers. One number a from the set [1, 2,....,n] is missing and one number b occurs twice in the array. Find numbers a and b.

// Note: The test cases are generated such that there always exists one missing and one repeating number within the range [1,n].

// Examples:

// Input: arr[] = [2, 2]
// Output: [2, 1]
// Explanation: Repeating number is 2 and smallest positive missing number is 1.
// Input: arr[] = [1, 3, 3] 
// Output: [3, 2]
// Explanation: Repeating number is 3 and smallest positive missing number is 2.



function findMissingAndRepeating(arr) {
    let n = arr.length;
    let missing = -1, repeating = -1;

    // Step 1: Mark the elements by converting their corresponding indices to negative.
    for (let i = 0; i < n; i++) {
        let num = Math.abs(arr[i]) - 1;

        // If the number at index `num` is already negative, it means `num+1` is the repeating number
        if (arr[num] < 0) {
            repeating = num + 1;
        } else {
            arr[num] = -arr[num];  // Mark the index as visited by making it negative
        }
    }

    // Step 2: Find the missing number by looking for the first positive element.
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            missing = i + 1;  // Index + 1 will be the missing number
            break;
        }
    }

    return [repeating, missing];
}

// Example usage:
console.log(findMissingAndRepeating([2, 2]));       // Output: [2, 1]
console.log(findMissingAndRepeating([1, 3, 3]));    // Output: [3, 2]
console.log(findMissingAndRepeating([4, 3, 6, 2, 1, 1])); // Output: [1, 5]
