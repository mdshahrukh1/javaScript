// You are given a string s, consisting of lowercase alphabets. Your task is to remove consecutive duplicate characters from the string. 

// Example:

// Input: s = "aabb"
// Output:  "ab" 
// Explanation: 
// The character 'a' at index 2 is the same as 'a' at index 1, so it is removed.
// Similarly, the character 'b' at index 4 is the same as 'b' at index 3, so it is removed.
// The final string is "ab".
// Input:s = "aabaa"
// Output: "aba"
// Explanation: 
// The character 'a' at index 2 is the same as 'a' at index 1, so it is removed.
// The character 'a' at index 5 is the same as 'a' at index 4, so it is removed.
// The final string is "aba".
// Input: s = "abcddcba"
// Output: "abcdcba"
// Explanation: 
// The character 'd' at index 5 is the same as 'd' at index 4, so it is removed.
// No other consecutive duplicates exist.
// The final string is "abcdcba".

function removeConsecutiveDuplicates(s) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== s[i - 1]) {
            result += s[i];
        }
    }
    
    return result;
}

// Example usage:
console.log(removeConsecutiveDuplicates("aabb")); // Output: "ab"
console.log(removeConsecutiveDuplicates("aabaa")); // Output: "aba"
console.log(removeConsecutiveDuplicates("abcddcba")); // Output: "abcdcba"
