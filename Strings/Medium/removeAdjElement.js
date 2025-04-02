// Recursively Remove Adjacent Duplicates
// Given a string s, remove all its adjacent duplicate characters recursively, until there are no adjacent duplicate characters left.

// Note: If the resultant string becomes empty, return an empty string.

// Examples:

// Input: s = "geeksforgeek"
// Output: "gksforgk"
// Explanation:  g(ee)ksforg(ee)k -> gksforgk
// Input: s = "abccbccba"
// Output: ""
// Explanation: ab(cc)b(cc)ba->abbba->a(bbb)a->aa->(aa)->""(empty string)
// Input: s = "abcd"
// Output: "abcd"
// Explanation: There are no adjacent duplicate characters

// This helper function makes one pass over the string to remove adjacent duplicates.



function removeAdjacentDuplicates(s) {
    function recurse(str) {
        let stack = [];
        let i = 0;

        while (i < str.length) {
            if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
                while (i < str.length && stack[stack.length - 1] === str[i]) {
                    i++; // Skip all adjacent duplicates
                }
                stack.pop(); // Remove last element as it has duplicate
            } else {
                stack.push(str[i]);
                i++;
            }
        }

        let newStr = stack.join('');
        return newStr === str ? newStr : recurse(newStr);
    }

    return recurse(s);
}

// Test cases
console.log(removeAdjacentDuplicates("geeksforgeek")); // Output: "gksforgk"
console.log(removeAdjacentDuplicates("abccbccba")); // Output: ""
console.log(removeAdjacentDuplicates("abcd")); // Output: "abcd"



class Solution {
    removeUtil(s) {
        while (true) {
            let result = [];
            let i = 0;
            
            while (i < s.length) {
                if (i < s.length - 1 && s[i] === s[i + 1]) {
                    // Skip all adjacent duplicates
                    while (i < s.length - 1 && s[i] === s[i + 1]) {
                        i++;
                    }
                } else {
                    result.push(s[i]); // Keep unique character
                }
                i++;
            }

            let newStr = result.join('');
            
            // If no changes were made, return result
            if (newStr === s) return newStr;
            
            // Update s and repeat the process
            s = newStr;
        }
    }
}






function removeOnce(s) {
    let result = "";
    let i = 0;
    
    while (i < s.length) {
      // If current char is same as the next one, skip all duplicates.
      if (i < s.length - 1 && s[i] === s[i + 1]) {
        let dup = s[i];
        // Skip all characters that are equal to 'dup'
        while (i < s.length && s[i] === dup) {
          i++;
        }
      } else {
        // Otherwise, add the current character to the result.
        result += s[i];
        i++;
      }
    }
    
    return result;
  }
  
  // This function calls removeOnce recursively until the string no longer changes.
  function removeRecursively(s) {
    // Remove adjacent duplicates in one pass.
    let newStr = removeOnce(s);
    
    // If no changes were made, we're done.
    if (newStr === s) {
      return newStr;
    }
    
    // Otherwise, repeat the process on the new string.
    return removeRecursively(newStr);
  }
  
  // Test examples:
  console.log(removeRecursively("geeksforgeek")); // Output: "gksforgk"
  console.log(removeRecursively("abccbccba"));    // Output: ""
  console.log(removeRecursively("abcd"));         // Output: "abcd"
  