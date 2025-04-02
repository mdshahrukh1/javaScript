// Given a string s without spaces, the task is to remove all duplicate characters from it, keeping only the first occurrence.

// Note: The original order of characters must be kept the same. 

// Examples :

// Input: s = "zvvo"
// Output: "zvo"
// Explanation: Only keep the first occurrence
// Input: s = "gfg"
// Output: "gf"
// Explanation: Only keep the first occurrence

function removeDuplicates(s) {
    let seen = new Set(); // To store unique characters
    let result = ""; // To store final string

    for (let char of s) {
        if (!seen.has(char)) { // If character is not seen before
            seen.add(char); // Mark it as seen
            result += char; // Append to result
        }
    }

    return result;
}

// Test cases
console.log(removeDuplicates("zvvo")); // Output: "zvo"
console.log(removeDuplicates("gfg"));  // Output: "gf"
console.log(removeDuplicates("banana")); // Output: "ban"
console.log(removeDuplicates("abcdef")); // Output: "abcdef"
