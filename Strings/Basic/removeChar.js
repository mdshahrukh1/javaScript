// Given two strings string1 and string2, remove those characters from first string(string1)
// which are present in second string(string2).
// Both the strings are different and contain only lowercase characters.
// NOTE: Size of  first string is always greater than the size of  second string( |string1| > |string2|).
 

// Example 1:

// Input:
// string1 = "computer"
// string2 = "cat"
// Output: "ompuer"
// Explanation: After removing characters(c, a, t)
// from string1 we get "ompuer".

function removeCharacters(string1, string2) {
    let result = '';
    
    // Loop through each character of string1
    for (let i = 0; i < string1.length; i++) {
        // If the character is not in string2, append it to result
        if (!string2.includes(string1[i])) {
            result += string1[i];
        }
    }
    
    return result;
}

// Example usage:
let string1 = "computer";
let string2 = "cat";
console.log(removeCharacters(string1, string2)); // Output: "ompuer"







// function removeCharacters(string1, string2) {
//     // Convert string2 into a set for quick lookups
//     let charsToRemove = new Set(string2);
    
//     // Filter out characters from string1 that are present in string2
//     let result = [...string1].filter(char => !charsToRemove.has(char)).join('');
    
//     return result;
// }

// // Example usage:
// let string1 = "computer";
// let string2 = "cat";
// console.log(removeCharacters(string1, string2)); // Output: "ompuer"
