// Given a string s without spaces, a character ch and an integer count. 
// Your task is to return the substring that remains after the character ch has appeared count number of times.
// Note:  Assume upper case and lower case alphabets are different.
// “”(Empty string) should be returned if it is not possible, or the remaining substring is empty.

// Examples:

// Input: s = "Thisisdemostring", ch = 'i', count = 3
// Output: ng
// Explanation: The remaining substring of s after the 3rd
// occurrence of 'i' is "ng", hence the output is ng.
// Input: s = "Thisisdemostri", ch = 'i', count = 3
// Output: ""
// Explanation: The 3rd occurence of 'i' is at the last index. In this case the remaining substring is empty, hence we return empty string.
// Input: s = "abcd", ch = 'x', count = 2
// Output: ""
// Explanation: The character x is not present in the string, hence we return empty string.
// Expected Time Complexity: O(|s|)
// Expected Auxiliary Space: O(1)


function getRemainingSubstring(s, ch, count) {
    let occurrence = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ch) {
            occurrence++;
            if (occurrence === count) {
                return s.substring(i + 1);
            }
        }
    }
    
    return ""; // If count occurrences are not found, return empty string
}

// Test cases
console.log(getRemainingSubstring("Thisisdemostring", 'i', 3)); // Output: "ng"
console.log(getRemainingSubstring("Thisisdemostri", 'i', 3));  // Output: ""
console.log(getRemainingSubstring("abcd", 'x', 2));           // Output: ""
