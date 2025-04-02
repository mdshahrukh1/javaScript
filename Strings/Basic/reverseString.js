// You are given a string s, and your task is to reverse the string.

// Examples:

// Input: s = "Geeks"
// Output: "skeeG"
// Input: s = "for"
// Output: "rof"
// Input: s = "a"
// Output: "a"



function reverseString(s) {
        // code here
        let rev = "";
        let n = s.length;
        for(let i = n - 1; i >= 0; i--){
    //rev = rev + s.charAt(i);  //rev += s[i]
           rev += s.charAt(i);
           }
         return rev;
    }

let s = "asif";
console.log(reverseString(s));
