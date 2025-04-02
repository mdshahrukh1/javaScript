// Given a string in Roman number format (s), your task is to convert it to an integer.
//  Various symbols and their values are given below.
// Note: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

// Examples:

// Input: s = "IX"
// Output: 9
// Explanation: IX is a Roman symbol which represents 10 – 1 = 9.
// Input: s = "XL" 
// Output: 40
// Explanation: XL is a Roman symbol which represents 50 – 10 = 40.
// Input: s = "MCMIV" 
// Output: 1904
// Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904.


function romanToInt(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
}

// Example usage:
console.log(romanToInt("IX"));  // Output: 9
console.log(romanToInt("XL"));  // Output: 40
console.log(romanToInt("MCMIV")); // Output: 1904
