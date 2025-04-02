// Given a string consisting of lowercase English alphabets, 
// reverse only the vowels present in it and print the resulting string.

// Examples:

// Input: s = "geeksforgeeks"
// Output: "geeksforgeeks"
// Explanation: The vowels are: e, e, o, e, e. Reverse of these is also e, e, o, e, e.
// Input: s = "practice"
// Output: "prectica"
// Explanation: The vowels are a, i, e. Reverse of these is e, i, a.


function reverseVowels(s) {
    // Define vowels for reference
    const vowels = 'aeiou';
    // Convert the string into an array for easy manipulation
    let chars = s.split('');
    
    // Extract vowels from the string
    let vowelArray = chars.filter(char => vowels.includes(char));
    
    // Replace vowels in the string from the end of the vowel array
    for (let i = 0; i < chars.length; i++) {
        if (vowels.includes(chars[i])) {
            chars[i] = vowelArray.pop();
        }
    }

    // Join the array back into a string and return
    return chars.join('');
}

// Test cases
console.log(reverseVowels("geeksforgeeks")); // Output: "geeksforgeeks"
console.log(reverseVowels("practice"));      // Output: "prectica"




function reverseVowels(s) {
    const vowels = 'aeiou';
    let vowelArray = [];

    // Collect all vowels from the string
    for (let char of s) {
        if (vowels.includes(char)) {
            vowelArray.push(char);
        }
    }

    // Replace vowels in the string with reversed ones
    return s.split('').map(char => vowels.includes(char) ? vowelArray.pop() : char).join('');
}

// Test cases
console.log(reverseVowels("geeksforgeeks")); // Output: "geeksforgeeks"
console.log(reverseVowels("practice"));      // Output: "prectica"


function reverseVowels(s) {
    // Convert the string into an array for easy manipulation
    let chars = s.split('');
    // Define vowels for reference
    const vowels = 'aeiou';
    // Initialize two pointers
    let left = 0, right = s.length - 1;

    // Use two-pointer approach to find vowels from both ends
    while (left < right) {
        // Move left pointer until a vowel is found
        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }
        // Move right pointer until a vowel is found
        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }
        // Swap the vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];
        // Move the pointers towards the center
        left++;
        right--;
    }

    // Join the array back into a string and return
    return chars.join('');
}

// Test cases
console.log(reverseVowels("geeksforgeeks")); // Output: "geeksforgeeks"
console.log(reverseVowels("practice"));      // Output: "prectica"
