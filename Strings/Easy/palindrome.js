// You are given a string s. Your task is to determine if the string is a palindrome. 
// A string is considered a palindrome if it reads the same forwards and backwards.

// Examples :

// Input: s = "abba"
// Output: true
// Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.

function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s.charAt(start) !== s.charAt(end)) {
            return false; // If characters don't match, it's not a palindrome
        }
        start++;
        end--;
    }
    return true; // If we exit the loop, it's a palindrome
}

// Test the function
console.log(isPalindrome("abb")); // Output: false
console.log(isPalindrome("aba")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
