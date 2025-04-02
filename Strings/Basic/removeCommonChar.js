// Given two strings s1 and s2.
// Modify both the strings such that all the common characters of s1 and s2 are to be removed
// and the uncommon characters of s1 and s2 are to be concatenated.
// Note: If all characters are removed print -1.

// Example 1:

// Input:
// s1 = aacdb
// s2 = gafd
// Output: cbgf
// Explanation: The common characters of s1
// and s2 are: a, d. The uncommon characters
// of s1 and s2 are c, b, g and f. Thus the
// modified string with uncommon characters
// concatenated is cbgf.

    //Function to remove common characters and concatenate two strings.
    function concatenatedString(s1, s2)
    {
        // Convert strings to arrays for easier manipulation
        let arr1 = s1.split('');
        let arr2 = s2.split('');
    
        // Create sets of characters for quick lookup
        let set1 = new Set(arr1);
        let set2 = new Set(arr2);
    
        // Find common characters
        let commonChars = [...set1].filter(char => set2.has(char));
    
        // Remove common characters from both strings
        let modifiedS1 = arr1.filter(char => !commonChars.includes(char)).join('');
        let modifiedS2 = arr2.filter(char => !commonChars.includes(char)).join('');
    
        // Concatenate the results
        let result = modifiedS1 + modifiedS2;
    
        // Return result or -1 if all characters are removed
        return result.length > 0 ? result : "-1";
    }

let s1 = 'aacdb';
let s2 = 'gafd';

console.log(concatenatedString(s1, s2));



// function modifyStrings(s1, s2) {
//     let result = '';

//     for (let char of s1) {
//         if (!s2.includes(char)) result += char;
//     }

//     for (let char of s2) {
//         if (!s1.includes(char)) result += char;
//     }

//     return result.length > 0 ? result : "-1";
// }

// // Example usage
// console.log(modifyStrings("aacdb", "gafd"));  // Output: "cbgf"
// console.log(modifyStrings("abcs", "cxzca"));  // Output: "bsxz"
// console.log(modifyStrings("abc", "abc"));     // Output: "-1"
