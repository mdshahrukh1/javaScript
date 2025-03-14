let firstname = "Gladden";
let lastname = "Rumao";

console.log(firstname + " " + lastname);//concatenation

let age = 99;
let sentence = "I am 23 years old";
let sentence1 = `I am ${age} years old`;// String interpolation with template literals
console.log(sentence);
console.log(sentence1);

let multilineStr = `
            So beautifull
            So elegent
            looking like a wow
            `;
console.log(multilineStr); // Multiline string with template literals

//toUpperCase(); toLowerCase();
let text = "javaScript is Easy";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);// length property
console.log(text.charAt(0)); //charAt Property
let n = text.length;
console.log(text.charAt(n-1));

// for(let i = 0; i < n; i++) { //iterating over string
//     console.log(text.charAt(i));
// }
console.log(text.indexOf("a"));

let str = "Hello Hello World World";

console.log(str.indexOf("l"));
console.log(str.indexOf("Hello")); // its gives starting index or first index
console.log(str.lastIndexOf("World"));
console.log(str.indexOf("W"));// its gives the first index of character
console.log(str.lastIndexOf("W"));// its gives the last index of the character

//SubString -> Part of the original string
console.log(str.substring(0,2)); // start is included but end is not included
console.log(str.substring(0,23)); // start is included but end is not included
console.log(str.substring(6)); // It will print the full string form 6th index

//Replace
console.log(str.replace("World","Universe"));


