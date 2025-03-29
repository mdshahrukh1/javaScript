// Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, 
// and the answer must not contain any duplicate pairs.

// Examples:

// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct pair are [-1,1].
// Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
// Output: [[-6, 6],[-1, 1]]
// Explanation: The distinct pairs are [-1, 1] and [-6, 6].


function findUniquePairs(arr) {
    let result = [];
    let seen = new Set();
    let pairs = new Set();
    
    for (let num of arr) {
        let complement = -num;
        
        if (seen.has(complement)) {
            let pair = [Math.min(num, complement), Math.max(num, complement)];
            let pairStr = pair.toString();
            
            if (!pairs.has(pairStr)) {
                pairs.add(pairStr);
                result.push(pair);
            }
        }
        
        seen.add(num);
    }
    
    result.sort((a, b) => a[0] - b[0]);
    return result;
}

// Example usage:
console.log(findUniquePairs([-1, 0, 1, 2, -1, -4])); // [[-1, 1]]
console.log(findUniquePairs([6, 1, 8, 0, 4, -9, -1, -10, -6, -5])); // [[-6, 6], [-1, 1]]
