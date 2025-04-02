// Given a string s of lowercase alphabets. 
// The task is to find the maximum occurring character in the string s.
//  If more than one character occurs the maximum number of times then print the lexicographically smaller character.

// Examples:

// Input: s = "testsample"
// Output: 'e'
// Explanation: e is the character which is having the highest frequency.


function maxOccurringChar(s) {
    let maxChar = '';
    let maxCount = 0;

    // Convert the string to a set to get unique characters
    for (let char of new Set(s)) {
        let count = s.split(char).length - 1; // Count occurrences of the character

        // Update maxChar if current char has higher count or is lexicographically smaller in case of a tie
        if (count > maxCount || (count === maxCount && char < maxChar)) {
            maxCount = count;
            maxChar = char;
        }
    }

    return maxChar;
}

let s = "testsample";

console.log(maxOccurringChar(s));




// function  getMaxOccuringChar(s) {
//         // code here
//          let freq = {};

//          // Count the frequency of each character
//         for (let char of s) {
//             freq[char] = (freq[char] || 0) + 1;
//         }

//         let maxCount = 0;
//         let resultChar = '';

//         // Iterate through the frequency object to find the character with max frequency
//         for (let char in freq) {
//             if (freq[char] > maxCount || (freq[char] === maxCount && char < resultChar)) {
//                 maxCount = freq[char];
//                 resultChar = char;
//             }
//         }
//         return resultChar;
//     }

