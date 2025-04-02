// In this problem, a String S is composed of lowercase alphabets and wildcard characters i.e. '?'.
//  Here, '?' can be replaced by any of the lowercase alphabets. Now you have to classify the given String on the basis of following rules:

// If there are more than 3 consonants together or more than 5 vowels together, 
// the String is considered to be "BAD". A String is considered "GOOD" only if it is not “BAD”.

// NOTE: String is considered as "BAD" if the above condition is satisfied even once.
// Else it is "GOOD" and the task is to make the string "BAD".
 

// Example 1:

// Input:
// S = aeioup??
// Output:
// 1
// Explanation: The String doesn't contain more
// than 3 consonants or more than 5 vowels together.
// So, it's a GOOD string.


function classifyString(S) {
    let consonantCount = 0;
    let vowelCount = 0;

    const isVowel = (char) => 'aeiou'.includes(char);

    for (let i = 0; i < S.length; i++) {
        const char = S[i];

        if (char === '?') {
            consonantCount++;
            vowelCount++;
        } else if (isVowel(char)) {
            vowelCount++;
            consonantCount = 0;
        } else {
            consonantCount++;
            vowelCount = 0;
        }

        if (consonantCount > 3 || vowelCount > 5) {
            return 0;  // BAD string
        }
    }

    return 1;  // GOOD string
}

// Example usage:
let S1 = "ab?eou";
console.log(classifyString(S1));  // Output: 1 (GOOD)

let S2 = "a?bbb?eou";
console.log(classifyString(S2));  // Output: 0 (BAD)
