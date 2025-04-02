// Find the first occurrence of the string pat in the string txt. 
// The function returns an integer denoting the first occurrence of the string pat in txt (0-based indexing).
// Note: You are not allowed to use the inbuilt function. If there is no occurrence then return -1.


// function findFirstOccurrence(txt, pat) {
//     for (let i = 0; i <= txt.length - pat.length; i++) {
//         let j = 0;
//         while (j < pat.length && txt[i + j] === pat[j]) {
//             j++;
//         }
//         if (j === pat.length) {
//             return i; // Found the pattern
//         }
//     }
//     return -1; // Pattern not found
// }

// Example usage

// console.log("The first occurrence is at index:", findFirstOccurrence(txt, pat));





// function findFirstOccurrence(txt, pat) {
//     let matchIndex = 0;  // Tracks current match position in 'pat'

//     for (let i = 0; i < txt.length; i++) {
//         if (txt[i] === pat[matchIndex]) {
//             matchIndex++;
//             if (matchIndex === pat.length) {
//                 return i - pat.length + 1;  // Found the pattern
//             }
//         } else {
//             // If a mismatch occurs, reset matchIndex
//             if (matchIndex > 0) {
//                 i = i - matchIndex;  // Rewind 'i' to recheck overlapping part
//             }
//             matchIndex = 0;
//         }
//     }
//     return -1;  // Pattern not found
// }

// // Example usage
// const txt = "hello world";
// const pat = "world";

// console.log("The first occurrence is at index:", findFirstOccurrence(txt, pat));




// function findFirstOccurrence(txt, pat) {
//     for (let i = 0; i <= txt.length - pat.length; i++) {
//         let match = true;

//         for (let j = 0; j < pat.length; j++) {
//             if (txt[i + j] !== pat[j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             return i;  // Return the index of the first occurrence
//         }
//     }
//     return -1;  // Pattern not found
// }



function firstOccurence(txt, pat) {
    // code here
    for (let i = 0; i <= txt.length - pat.length; i++) {
        if (txt.slice(i, i + pat.length) === pat) {
          return i;  // Return the index of the first occurrence
        }
    }
    return -1;  // Pattern not found
}

// Example usage
const txt = "hello world";
const pat = "world";

console.log(firstOccurence(txt, pat));  // Output: 6
