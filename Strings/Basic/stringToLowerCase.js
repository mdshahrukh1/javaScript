// Given a string s. The task is to convert string characters to lowercase.

// Examples:

// Input: s = "ABCddE"
// Output: "abcdde"
// Explanation: A, B, C and E are converted to a, b, c and e thus all uppercase characters of the string converted to lowercase letter.




function toLower(s) {

    let result = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(char.charCodeAt(0) + 32);
        } else {
            result += char;
        }
    }
    return result;
}

let s = "AbcdEfGH";

console.log(toLower(s));