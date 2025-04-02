// Given a non-empty sequence of characters s,
// return true if sequence is Binary, else return false.

// Examples:

// Input: s = "101"
// Output: true
// Explanation: Since string contains only '0' and '1', output is true.
// Input: s = "75"
// Output: false
// Explanation: Since string contains digits other than '0' and '1', output is false.



function isBinary(s) {
    // code here
    // let n = s.length;
    for(let key of s){
        if(key !== '0' && key !== '1'){
            return false;
        }
    }
    return true;
}

let s = '00110';
console.log(isBinary(s));