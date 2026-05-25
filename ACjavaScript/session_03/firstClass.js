/* 
String Methods
Methods - actions that can performed on object.

format
StringName.method()


let msg = " Hello ";

str.trim() - Trims whitespaces from both ends of string & returns a new one.

putput: "Hello", but value of msg remains same.


In JavaScript strings are immutable
No changes can be made to strings.

Whenever we do try to make a change, a new string is created and old one remains same.


*/

let msg = "     Hello     ";
console.log(msg);

let op = msg.trim();
console.log(msg);
console.log(op);

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);


// str.toUpperCase(); everything will convert into Capital. 
// str.toLowerCase(); everything will convert into small.

let str = "Random string";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

/* String Methods with Arrguments

Argument is a some value that we pass to the method.
Format => stringName.method(arg);

indexOf() - Returns the first index of occurrence of some value in string. or gives -1 not found.


*/

let strr = "IloveCoding";

console.log(strr.indexOf("love")); // 1

console.log(strr.indexOf("j"));  // -1 (not found)

console.log(strr.indexOf("o")); // 2(only 1 index) first occurence


// Method Chaining - Using one method sfter another. 
// Order of execution will be left to right.

let message = "   Hello   ";

console.log(message.trim().toUpperCase());



/* 

slice() - Returns a part of the original string as new string.

let str = "IloveCoding";

str.slice(5); // "Coding"

str.slice(1, 4); // "love"

str.slice(-num) = str.slice(length - num)
*/

let hello = "IloveCoding";

console.log(hello.slice(5));
console.log(hello.slice(1, 4));
console.log(hello.slice(-1)); //g
console.log(hello.slice(-2)); // ng
console.log(hello.slice(-3)); //ing


/* 
Replace() - Searches a value in the string and returns a new stirng with the value replaced.

let str = "IloveCoding";

str.replace("love", "do"); // "IdoCoding"

str.replace("o", "x"); // "IlxveCoding"

*/

let hell = "IloveCoding";

console.log(hell.replace("love", "do")); // "IdoCoding"

console.log(hell.replace("o", "x")); // "IlxveCoding"


// repeat() - Returns a string with the number of copies of a string.

let fruit = "Mango";

console.log(fruit.repeat(3)); // "MangoMangoMango"


// Practice Questions

// Trim & convert it to uppercase 

let mssg = "help! ";

console.log(mssg.trim().toUpperCase());

let name = "ApnaCollege";

console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

console.log(name.slice(4).replace("l", "t"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));