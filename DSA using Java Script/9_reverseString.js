//Reverse a string

let s = "Hello";
let n = s.length;
let rev = ""; //Initialize an empty String 

for(let i = n - 1; i >= 0; i--){
    //rev = rev + s.charAt(i);  //rev += s[i]
    rev += s.charAt(i);
}
console.log(rev);