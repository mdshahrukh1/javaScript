// Given two strings s1 and s2, check if these two strings are isomorphic to each other.

// If the characters in s1 can be changed to get s2, then two strings, s1 and s2, are isomorphic. 
// A character must be completely swapped out for another character while maintaining the order of the characters. 
// A character may map to itself, but no two characters may map to the same character.

// Examples:

// Input: s1 = "aab", s2 = "xxy"
// Output: true
// Explanation: There are two different characters in aab and xxy, i.e a and b with frequency 2 and 1 respectively.
// Input: s1 = "aab", s2 = "xyz"
// Output: false
// Explanation:  There are two different characters in aab but there are three different charactersin xyz.
// So there won't be one to one mapping between s1and s2.


function areIsomorphic(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    let map1 = {};
    let map2 = {};
    
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];
        
        if (map1[char1] && map1[char1] !== char2) return false;
        if (map2[char2] && map2[char2] !== char1) return false;
        
        map1[char1] = char2;
        map2[char2] = char1;
    }
    
    return true;
}

// Example usage:
console.log(areIsomorphic("aab", "xxy")); // Output: true
console.log(areIsomorphic("foo", "bar")); // Output: false
