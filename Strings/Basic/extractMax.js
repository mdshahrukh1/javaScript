// Given a alphanumeric string S, extract maximum numeric value from S.

// Example 1:

// Input:
// S = 100klh564abc365bg
// Output: 564
// Explanation: Maximum numeric value 
// among 100, 564 and 365 is 564.




// function extractMaxNumericValue(S) {
//     let max = -1;  // Initialize max to -1 to handle case when no numbers are found
//     let currentNum = 0;
//     let foundNumber = false;  // Flag to track if a number is found
    
//     for (let i = 0; i < S.length; i++) {
//         if (/\d/.test(S[i])) {  // If the character is a digit
//             currentNum = currentNum * 10 + Number(S[i]); // Build number
//             foundNumber = true;  // Mark that a number is found
//         } else {
//             if (currentNum > max) max = currentNum; // Check if current number is the max
//             currentNum = 0; // Reset number
//         }
//     }
    
//     // Final check for the last number
//     if (currentNum > max) max = currentNum;

//     return foundNumber ? max : -1; // Return -1 if no number was found
// }

// // Example usage:
// let S = "100klh564abc365bg";
// let result = extractMaxNumericValue(S);
// console.log(result);  // Output: 564

// let S2 = "abcxyz";
// let result2 = extractMaxNumericValue(S2);
// console.log(result2);  // Output: -1 (no numbers found)


function extractMaxNumericValue(S) {
    let max = 0;
    let currentNum = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (/\d/.test(S[i])) {  // Check if the character is a digit
            currentNum = currentNum * 10 + Number(S[i]); // Build the current number
        } else {
            max = Math.max(max, currentNum); // Update max if current number is larger
            currentNum = 0; // Reset current number when a non-digit is encountered
        }
    }
    
    // Handle the case where the last number is the largest
    max = Math.max(max, currentNum);
    
    return max;
}

// Example usage:
let S = "100klh564abc365bg";
let result = extractMaxNumericValue(S);
console.log(result);  // Output: 564
