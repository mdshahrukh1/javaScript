// Given a string s consisting of only '0's and '1's,  find the last index of the '1' present.

// Note: If '1' is not present, return "-1"

// Examples:

// Input: s = 00001
// Output: 4
// Explanation: Last index of  1 in given string is 4.


function lastIndex(S){
    //code here
    let Index = -1;
    for(let i = 0; i < S.length; i++){
        if(S[i] === '1'){
            Index = i;
        }
    }
    return Index;
}