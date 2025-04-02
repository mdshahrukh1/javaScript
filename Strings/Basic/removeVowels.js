// Given a string s. Your task is to remove the vowels from the string.

// Examples:

// Input: s = "welcome to geeksforgeeks"
// Output: "wlcm t gksfrgks"
// Explanation: Vowels were ignored only consonents were retuherned in the same order.

function removeVowels(s) {
    let result = "";
    let vowels = "aeiouAEIOU";
    
    for (let char of s) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    
    return result;
}

// Example usage:
const input = "welcome to geeksforgeeks";
console.log(removeVowels(input)); // "wlcm t gksfrgks"




// function removeVowels(s) {
//     return s.replace(/[aeiouAEIOU]/g, '');
// }

// // Example usage:
// const input = "welcome to geeksforgeeks";
// const output = removeVowels(input);
// console.log(output); // "wlcm t gksfrgks"
