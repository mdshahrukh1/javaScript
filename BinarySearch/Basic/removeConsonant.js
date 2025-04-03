// Given a string S, remove all consonants and print the modified string that contains vowels only.

// Example 1:

// Input
// S = "abEkipo"
// Output
// aEio
// Explanation : a, E, i, o are only vowels in the string.


function removeConsonants(s)
    {
        //your code here
        let vowels = 'aeiouAEIOU';
        let result = '';
        
        for(let char of s){
            if(vowels.includes(char)){
                result += char;
            }
        }
        if(!result){
            return 'No Vowel';
        } else {
            return result;
        }
    }


let S = "abEkipo"
// Output
// aEio

console.log(removeConsonants(S));
