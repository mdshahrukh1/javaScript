//Reverse a string

// let s = "madam";
// let n = s.length;
// let rev = ""; //Initialize an empty String 

// for(let i = n - 1; i >= 0; i--){
//     //rev = rev + s.charAt(i);  //rev += s[i]
//     rev += s.charAt(i);
// }
// console.log(rev);

// if( s == rev){
//     console.log("Yes Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }

let str = "madam";
let n = str.length;
let s = 0;
let e = n - 1;

while (s < e) { // (e > s)
    if (str[s] != str[e]) {
        console.log("False");
        return;
    }
    else{ //Optional
        s++;
        e--;
    }
}
console.log("True");