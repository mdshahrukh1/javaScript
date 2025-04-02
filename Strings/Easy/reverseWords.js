// Given a string s, reverse the string without reversing its individual words. Words are separated by spaces.

// Note: The string may contain leading or trailing spaces, or multiple spaces between two words. 
// The returned string should only have a single space separating the words, and no extra spaces should be included.

// Examples :

// Input: s = " i like this program very much "
// Output: "much very program this like i"
// Explanation: After removing extra spaces and reversing the whole string (not individual words),
//  the input string becomes "much very program this like i". 
// Input: s = " pqr mno "
// Output: "mno pqr"
// Explanation: After removing extra spaces and reversing the whole string, the input string becomes "mno pqr". 

function reverseWords(s) {
    let trimmedStr = s.trim(); // Remove leading and trailing spaces
    let words = [];
    let word = "";
    
    // Split words manually
    for (let i = 0; i < trimmedStr.length; i++) {
        if (trimmedStr[i] !== ' ') {
            word += trimmedStr[i];
        } else if (word.length > 0) {
            words.push(word);
            word = "";
        }
    }
    if (word.length > 0) {
        words.push(word);
    }
    
    // Reverse the words array
    let reversedStr = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversedStr += words[i];
        if (i !== 0) {
            reversedStr += " ";
        }
    }
    
    return reversedStr;
}

// Example usage
console.log(reverseWords(" i like this program very much ")); // "much very program this like i"
console.log(reverseWords(" pqr mno ")); // "mno pqr"
