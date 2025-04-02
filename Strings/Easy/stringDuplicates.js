// Given a string s which may contain lowercase and uppercase characters.
// The task is to remove all duplicate characters from the string and find the resultant string.
// The order of remaining characters in the output should be same as in the original string.

// Example 1:

// Input: s = "geEksforGEeks"
// Output: "geEksforG"
// Explanation: After removing duplicate characters such as E, e, k, s, we have string as "geEksforG".


function removeDuplicates(s) {
    let seen = new Set();
    let result = "";

    for (let char of s) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

// Example usage:
let s = "geEksforGEeks";
console.log(removeDuplicates(s)); // Output: "geEksforG"
