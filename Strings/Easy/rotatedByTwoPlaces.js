// Given two strings s1 and s2. Return true if the string s2 can be obtained by rotating (in any direction)
// string s1 by exactly 2 places, otherwise, false.

// Note: Both rotations should be performed in same direction chosen initially.

// Examples:

// Input: s1 = "amazon", s2 = "azonam"
// Output: true
// Explanation: "amazon" can be rotated anti-clockwise by two places, which will make it as "azonam".
// Input: s1 = "geeksforgeeks", s2 = "geeksgeeksfor"
// Output: false
// Explanation: If we rotate "geeksforgeeks" by two place in any direction, we won't get "geeksgeeksfor".
// Input: s1 = "ab", s2 = "ab"
// Output: true
// Explanation: If we rotate "ab" by two place in any direction, we always get "ab".
// Challenge: Try doing it in O(1) space complexity


function isRotationByTwo(s1, s2) {
    // Check if strings have equal length
    if (s1.length !== s2.length) {
        return false;
    }
    
    // Clockwise rotation: move last 2 characters to the front
    let clockwise = s1.slice(-2) + s1.slice(0, s1.length - 2);
    
    // Anticlockwise rotation: move first 2 characters to the back
    let anticlockwise = s1.slice(2) + s1.slice(0, 2);
    
    // Check if either rotation matches s2
    return clockwise === s2 || anticlockwise === s2;
}

// Example usage:
console.log(isRotationByTwo("amazon", "azonam")); // Output: true
console.log(isRotationByTwo("geeksforgeeks", "geeksgeeksfor")); // Output: false
console.log(isRotationByTwo("ab", "ab")); // Output: true
