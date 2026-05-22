// Let Keyword
// Syntax of declaration variables

let age = 23;
let egpa;
// age = age + 1;
cgpa = 8.9;

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;

// Practice question
// = this is assignment operator
console.log(age + 2);  // after two years;
console.log(age);  // after two years it did'nt work;
age = age + 2;
console.log(age);

// Const Kyword
// Values of constant can't be changed with re-assignment & they cna't be re-declared. 

const year = 2026;

// year = 2025; error 
// year = year + 1; error 

const pi = 3.14;
const g = 9.8;


// var Keyword - Old Syntax of writing variables.
var age1 = 23;
var cgpa = 8.9;
var num = 1;
var num0 = 2;
var summ = num + num0;


// Practice question 2

let hindi = 80;
let eng = 90;
let math = 100;

let avg = (hindi + eng + math) / 3;
console.log(avg);


// Assignment Operators

age = age + 1;
age += 1;

age = age - 1;
age -= 1;

age = age * 1;
age *= 1;

age = age % 2;
age %= 2;

// Unary Operators

age++; // increment by 1 also called post increment operator (use,then change)
age--; // decrement by 1 also called post decrement operator (use,then change)

++age; // Pre-increment operator (change, then use)
--age; //Pre-decement operator (change, then use)

// What is the value of each variable in cach line of code ?

let number = 5;
console.log(number);
let newNUm = number++;
console.log(newNUm);
newNUm = ++number;
console.log(newNUm);


// Identifier Rules 
// All JavaScript variables must be identified with unique names(identifiers).
/* 
Names can contain letters, digits, underscores, and dollar signs.(no space)
Names must begin with a letter.
Names can also begin with $ and _ .
Names are case sensitive(y and Y are different variables) 
Reserved words(like javaScript keywords) CANNOT be used as names. Foster


camelCase - Way of writing identifiers

camelCAse(JS naming conventiion)

snake_case

PascalCase



Boolean in JS 
Boolea represents a truth value -> true or false / yes or no

let age = 23;
let isAdult = true;

let age = 13;
let isAdult = false;

** we can change type of a variable in Js by changing their value.



What is TypeScript?
Static Typed, where Js is dynamic typed.

Designed by Microsoft.


Practice Question
Q. Find the errors in the following code ?

lelt 1age = 5;
let 2age = 10;

let marks  = 75;
let isPass = True;

let isPass = 'true';



String in JS
Strings are text or sequence of characters

let name = "Tony Stark";
let role = "ironman";
let char = 'a';
let num = '23';
let empty = "";

let sentence = "this is "apple""";  wrong
let sen = 'this is 'apple''; wrong





String Indices (Zero based indexing, starting from 0)

let name = "TONY STARK";

TONY STARK
0123456789


name[0] = 'T';
name[1] = 'O';


Concatenation - adding strings together

"tony" + "" + "stark" = "tony stark";
"tony" + 1 = "tony1";


NUll & undefined in JS

undefined
A variable that has not been assigned a value is of type undefined.

let a;

a is undefined.

null
The null value represents the intentional absence of any object value.

To be explicitly assigned.

let a = null;

a is null;


 */

let sentence = 'this is "apple"';
let sen = "this is 'apple'";
console.log(sen.length);
console.log(sen[sen.length - 2]);

/* 
Practice Questions.

1. Declare your name as a string and print its length is js.

2. Declare your first name as a string and print its first character.

3. Declare your first name as a string and print its last character.

4. What is output of the following code:
 "apnacollege"+ 123

 Ans = "apnacollege123";
 
5. What are lengths of an empty string & a string with a single space?
 for empty string 0  & 
 with single space it is 1.

 */

let name = "Md Shahrukh";
console.log(name.length);

let firstname = "Shahrukh";
console.log(firstname[0]);
console.log(firstname.charAt(0));

let len = firstname.length;
console.log(len);
console.log(firstname[len - 1]);
console.log(firstname[firstname.length - 1]);

console.log("apnacollege"+123);

let a = "";
let b = " ";

console.log(a.length);
console.log(b.length);
