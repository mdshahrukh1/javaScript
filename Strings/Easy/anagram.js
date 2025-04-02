// Given two strings s1 and s2 consisting of lowercase characters. 
// The task is to check whether two given strings are an anagram of each other or not.
// An anagram of a string is another string that contains the same characters, 
// only the order of characters can be different. For example, "act" and "tac" are an anagram of each other.
// Strings s1 and s2 can only contain lowercase alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.

// Examples :

// Input: s1 = "geeks", s2 = "kseeg"
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.


function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) return false;

    let count = new Array(26).fill(0); // Since we only have lowercase letters

    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++; // Increase count for s1
        count[s2.charCodeAt(i) - 97]--; // Decrease count for s2
    }

    return count.every(num => num === 0); // If all counts are zero, they are anagrams
}

// Example usage:
console.log(areAnagrams("geeks", "kseeg")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false




function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) return false; // If lengths differ, they can't be anagrams

    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// Example usage:
console.log(areAnagrams("geeks", "kseeg")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
