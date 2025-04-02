// Given an array arr[] containing strings of names. Your task is to return the longest string. If there are multiple names of the longest size, return the first occurring name.

// Examples :

// Input: arr[] = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: "GeeksforGeeks"
// Explanation: name "GeeksforGeeks" has maximum length among all names.


function longest(arr) {
    // code here
    let LongName = arr[0];
    let n = arr.length;
    
    for(let i = 1; i < n; i++){
        if(arr[i].length > LongName.length){
            LongName = arr[i];
        }
    }
    return LongName;
}

let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"];

console.log(longest(arr));