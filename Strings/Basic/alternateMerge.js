// Given two strings S1 and S2 as input, the task is to merge them alternatively i.e. 
// the first character of S1 then the first character of S2 and so on till the strings end.
// NOTE: Add the whole string if other string is empty.

// Example 1:

// Input:
// S1 = "Hello" S2 = "Bye"
// Output: HBeylelo
// Explanation: The characters of both the 
// given strings are arranged alternatlively.


function mergeAlternately(S1, S2) {
    let result = "";
    let i = 0, j = 0;
    
    while (i < S1.length || j < S2.length) {
        if (i < S1.length) result += S1[i++];
        if (j < S2.length) result += S2[j++];
    }
    
    return result;
}

// Example usage:
console.log(mergeAlternately("Hello", "Bye"));  // Output: "HBeylelo"
console.log(mergeAlternately("abc", "xyz123")); // Output: "axbycz123"
console.log(mergeAlternately("abcd", "pq"));    // Output: "apbqcd"
