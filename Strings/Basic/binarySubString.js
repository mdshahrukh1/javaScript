// Given a binary string S. 
// The task is to count the number of substrings that start and end with 1. 
// For example, if the input string is “00100101”, 
// then there are three substrings “1001”, “100101” and “101”.

// Example 1:

// Input:
// N = 4
// S = 1111
// Output: 6
// Explanation: There are 6 substrings from
// the given string. They are 11, 11, 11,
// 111, 111, 1111.


// function binarySubstring(n, a)
// {
//     // code here
//     let count = 0;

//     // Iterate through all possible substrings
//     for (let i = 0; i < n; i++) {
//         if (a[i] === '1') { // Substring must start with '1'
//             for (let j = i + 1; j < n; j++) {
//                 if (a[j] === '1') { // Substring must end with '1'
//                     count++;
//                 }
//             }
//         }
//     }

//     return count;

// }


// function binarySubstring(n, a)
function binarySubstring(a)
    {
        // code here
        let countOfOnes = 0;

        // Count the total number of '1's
         for (let char of a) {
            if (char === '1') {
                countOfOnes++;
            }
        }

        // Calculate the number of substrings that start and end with '1' (excluding single '1's)
        let substringsCount = (countOfOnes * (countOfOnes - 1)) / 2;

          return substringsCount;
    }
    
    let a = '1111';
    console.log(binarySubstring(a));