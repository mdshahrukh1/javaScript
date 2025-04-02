// Given a binary string S. The task is to count the number of substrings that starts and end with 1.
// Note: The starting and the ending 1s should be different.

// Example 1:

// Input:
// S = "10101"
// Output: 3
// Explanation: The 3 substrings are "101",
// "10101" and "101".

// â€‹Example 2:

// Input: 
// S = "100"
// Output: 0
// Explanation: No substring that starts and
// ends with 1.

function countSubstrings(S) {
    let countOnes = 0;
    
    // Count the number of 1's in the string
    for (let char of S) {
        if (char === '1') countOnes++;
    }
    
    // If there are no 1s, return 0 explicitly
    if (countOnes < 2) return 0;

    // Calculate the number of valid substrings using the formula n(n-1)/2
    return (countOnes * (countOnes - 1)) / 2;
}

// Test cases
console.log(countSubstrings("10101")); // Output: 3
console.log(countSubstrings("100"));   // Output: 0
console.log(countSubstrings("0"));     // Output: 0
console.log(countSubstrings("1"));     // Output: 0
console.log(countSubstrings("1111"));  // Output: 6
