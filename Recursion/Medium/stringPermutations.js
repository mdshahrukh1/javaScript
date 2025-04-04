// Given a string s, which may contain duplicate characters, your task is to generate and 
// return an array of all unique permutations of the string. You can return your answer in any order.

// Examples:

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.

function findPermutation(s) {
    function generate(s, result, curr, used) {
        if (curr.length == s.length) {
            result.push(curr.join("")); // Convert array to string before pushing
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (used[i]) continue;
            curr.push(s[i]);
            used[i] = true;
            generate(s, result, curr, used);
            curr.pop();
            used[i] = false;
        }
    }
    
    let result = [];
    generate(s, result, [], Array(s.length).fill(false));
    
    // result.sort(); // Sort lexicographically
    
    return result; // Return as an array
}

// Example Usage:
console.log(findPermutation("abc"));




function findPermutation(s) {
    function generate(s, result, curr, used) {
        if (curr.length === s.length) {
            result.add(curr.join("")); // Use a Set to prevent duplicates
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (used[i]) continue;
            curr.push(s[i]);
            used[i] = true;
            generate(s, result, curr, used);
            curr.pop();
            used[i] = false;
        }
    }

    let result = new Set(); // Use a Set to store unique permutations
    generate(s, result, [], Array(s.length).fill(false));

    return Array.from(result); // Convert to sorted array
}

// Example Usage
console.log(findPermutation("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(findPermutation("KK"));  // ["KK"]





function findPermutation(s) {
    let result = [];
    let charCount = {}; 
    let uniqueChars = []; // To maintain insertion order

    // Count occurrences of each character and track their order of appearance
    for (let char of s) {
        if (!(char in charCount)) {
            uniqueChars.push(char);
        }
        charCount[char] = (charCount[char] || 0) + 1;
    }

    function backtrack(curr) {
        if (curr.length === s.length) {
            result.push(curr.join(""));
            return;
        }

        for (let char of uniqueChars) {
            if (charCount[char] > 0) {
                curr.push(char);
                charCount[char]--;

                backtrack(curr);

                curr.pop();
                charCount[char]++;
            }
        }
    }

    backtrack([]);
    return result;
}

// Example Usage
console.log(findPermutation("abc"));  // ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(findPermutation("KK"));   // ["KK"]
