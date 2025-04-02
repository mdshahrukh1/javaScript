// Given two strings s1 and s2 in lowercase,
//  the task is to make them anagrams. The only allowed operation is to remove a character from any string. 
// Find the minimum number of characters to be deleted to make both the strings anagram. 
// Two strings are called anagrams of each other if one of them can be converted into another by rearranging its letters.

// Examples:

// Input: s1 = "bcadeh", s2 = "hea"
// Output: 3
// Explanation: We need to remove b, c and d from s1.

function remAnagram(s1, s2) {
    const count = new Array(26).fill(0);  // Array to track letter counts (for 'a' to 'z')

    // Increment counts for s1
    for (let char of s1) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Decrement counts for s2
    for (let char of s2) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    // Sum up absolute differences
    return count.reduce((sum, val) => sum + Math.abs(val), 0);
}

let s1 = "bcadeh", s2 = "hea";

console.log(remAnagram(s1, s2));


// function minDeletionsToMakeAnagram(s1, s2) {
//     // Function to create a frequency map of characters
//     function getCharCount(str) {
//         const count = {};
//         for (let char of str) {
//             count[char] = (count[char] || 0) + 1;
//         }
//         return count;
//     }

//     const count1 = getCharCount(s1);
//     const count2 = getCharCount(s2);
//     let deletions = 0;

//     // Set of all unique characters from both strings
//     const allChars = new Set([...Object.keys(count1), ...Object.keys(count2)]);

//     // Calculate total deletions required
//     for (let char of allChars) {
//         const freq1 = count1[char] || 0;
//         const freq2 = count2[char] || 0;
//         deletions += Math.abs(freq1 - freq2);
//     }

//     return deletions;
// }

// // Example usage
// const s1 = "bcadeh";
// const s2 = "hea";
// console.log(minDeletionsToMakeAnagram(s1, s2));  // Output: 3
