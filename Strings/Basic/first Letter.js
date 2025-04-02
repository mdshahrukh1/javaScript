// Given a string S, the task is to create a string with the first letter of every word in the string.
 

// Example 1:

// Input: 
// S = "geeks for geeks"
// Output: gfg


function firstLetterString(S) {
    let result = "";
    
    // Split the string by spaces and filter out empty strings (to handle multiple spaces)
    let words = S.split(" ").filter(word => word.length > 0);
    
    for (let word of words) {
        result += word[0]; // Append the first character of each word
    }
    
    return result;
}

// Example usage:
const input = "geeks for geeks";
console.log(firstLetterString(input)); // Output: "gfg"
