let s = "abcdbfha";
let n = s.length;

for(let i = 0; i < n; i++){  // you can use i<=n-1
    let ch = s.charAt(i); // ch = a// ch = b// ch = c
    if(s.indexOf(ch) === s.lastIndexOf(ch)){ // checking first and last index of the character
        console.log(ch);
        return;
    }
}