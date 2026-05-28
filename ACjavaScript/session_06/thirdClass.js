/*
Scope - Scope determines the accessibility of variables, objects, and functions from different parts of the code.

Function Scope, Block Scope, Lexical Scope

Function Scope - Variables defined inside a function are not accessible(visible) from outside the function.

Block Scope - Variables declared inside a {}block cnanot be accessed from outside the block.
It applies on let & const but doesn't apply on var.

Lexical Scope - a variable defined outside a function can be accessible inside another function defined after the variable declaration.
                The opposite is NOT true.

*/

let sum = 54; //Global Scope

function sumNum(a, b) {
    let sum = a + b; // Fuctions Scope
    console.log(sum);
}

sumNum(1, 2);
console.log(sum);


// Lexical scope
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    innerFunc();
}

outerFunc();



// hoisting
function outerFunc() {
    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    let x = 5;
    let y = 6;

    innerFunc();
}


// Practice Question
let greet = "hello"; // global scope

function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();


// Function Expressions 
// const variable = function(arg1, arg2..){
//     //do or return something.
// }

let name = "Shahrukh";

let summation = function (a, b) {
    return a + b;
}

console.log(summation(2, 5));

let hello = function () {
    console.log("hello");
}

hello = function () {
    console.log("namaste");
}



/* 

Higher Order Functions

Afunction that does one or both :
1. takes one or multiple functions as arguments

2. returns a function
*/

let greetings = function () {
    console.log("hello");
}

function multipleGreet(func, count) {  // Higher order function
    for (let i = 1; i <= count; i++) {
        func();
    }
}

multipleGreet(greetings, 10);


/* 

Higher order Functions (Returns)


*/

function oddOrEvenFactory(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }

        // let odd = function (n) {
        //     console.log(!(n % 2== 0));
        // }
        // return odd;


    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }

        // let even = function (n) {
        //     console.log(n % 2 == 0);

        // }
        // return even;

    } else {
        console.log("wrong request");
    }
}

let request = "odd";

let func = oddOrEvenFactory(request);

func(3);



/* 
Methods  - Actions that can be performed on an object

*/

const calculator = {
    // num: 55,

    // add: function(a, b){
    //     return a + b;
    // },

    // sub: function(a, b){
    //     return a - b;
    // },

    // mul: function(a, b){
    //     return a * b;
    // }

    // Two ways to define method
    num: 55,
    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a - b;
    },

    mul(a, b) {
        return a * b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(1, 9));
console.log(calculator.sub(8, 6));
console.log(calculator.mul(8, 9));