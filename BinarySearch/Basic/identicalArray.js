// Check whether given two arrays a[] and b[] are identical or not.
// Two arrays are called identical arrays if they contain the same element with the same count,
// regardless of the order of elements.

// Examples:

// Input: a[] = [1, 2, 3, 4, 5], b[] = [3, 4, 1, 2, 5]
// Output: true
// Explanation: Here we can see array a[] = [1, 2, 3, 4, 5] and b[] = [3, 4, 1, 2, 5]. 
// If we look both the array then we can get that array b[] is the permutation of a[]. So, both array.are identical.



function isIdentical(a, b) {
    // Your code goes here
    if(a.length !== b.length) return false;
    
    let freqA = {}, freqB = {};
    
    for(let num of a){
        freqA[num] = (freqA[num] || 0) + 1;
    }
    
    for(let num of b){
        freqB[num] = (freqB[num] || 0) + 1;
    }
    
    for(let key in freqA){
        if(freqA[key] !== freqB[key]) return false;
    }
    return true;
}