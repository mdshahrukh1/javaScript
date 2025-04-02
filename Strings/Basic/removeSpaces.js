// Given a string s. Your task is to remove spaces from it. 

// Examples:

// Input: s = "geeks  for geeks"
// Output: "geeksforgeeks"
// Explanation: All the spaces have been removed.




function modify(s){
    let result = '';
    for(let key of s){
        if(key !== ' '){
            result += key;
        }
    }
    return result;
}

let s = "Md Shah Rukh .";
console.log(modify(s));