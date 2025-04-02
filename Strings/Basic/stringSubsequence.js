// Given two strings A and B, find if A is a subsequence of B.

// Example 1:

// Input:
// A = AXY 
// B = YADXCP
// Output: 0 
// Explanation: A is not a subsequence of B
// as 'Y' appears before 'A'.

function isSubsequence(A, B) {
    let i = 0; // Pointer for A
    let j = 0; // Pointer for B

    while (i < A.length && j < B.length) {
        if (A[i] === B[j]) {
            i++; // Move pointer in A if characters match
        }
        j++; // Always move pointer in B
    }

    // If i reached the end of A, it's a subsequence
    return i === A.length ? 1 : 0;
}

// Example 1:
let A = "AXY";
let B = "YADXCP";
console.log(isSubsequence(A, B)); // Output: 0

