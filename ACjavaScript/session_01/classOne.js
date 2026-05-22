// Using the console  in Chrome
// It uses REPL -> Read-Evaluate-Print-Loop 
// For clearing the screen in MAC - cmd + k & for Windows - ctrl + L

let a = 13;
let b = 2;
let age = 23;
let name = "Tony";
console.log(a + b);
console.log(typeof(a));
console.log(typeof(name));

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/* 
What is a Variable ?
A variable is simply the name of a storage location

there is a limit to a particular number.

Data Types in JS

Primitive Types
Numbers in JS
NUmber - Positive(14) & Negative(-4),
        INteger(45, -50),
        Floating numbers - with decimal(4.6, -8.9).

(* JavaScript will automatically detect the type of data.)

Boolean -

String -

Undefined -

NUll - 

Bigint -
 
Symbol -


Operations in JS

a + b = c
 + is operator.
operands = a, b.


Modulo(remainder operator)
12 % 5 = 2

Exponentiation(power operator)
2**3 = 8


NaN is JS - The NaN global property is a value representinig Not-A-Number.

0 / 0, NaN - 1, NaN * 1, NaN + 1, NaN + NaN

*/

let sum = a + b;
let diff = a - b;
let mul = a * b;
let div = a / b;
let remainder = a % b;
let power = a ** b;

console.log(sum +' '+ diff +' ' + mul + ' ' + div  + ' ' + remainder + ' ' + power);

console.log(NaN + NaN);
console.log(NaN + 1);
console.log(NaN - 1);
console.log(NaN * 2);
console.log(typeof(NaN));


// Operator Precendence
// This is the general order of solving an expression 

// (); **; *, /, %; +,-

// (5 + 2) / 7 + 1 * 2 = 7/7 + 1 * 2 = 1 + 2 = 3

// for power we do operations from right to left for other left to right

// (2 + 1) * 3 = 9
// 3 /1 + 2 ** 2 = 7
// 4 + 1 * 6 / 2 = 7