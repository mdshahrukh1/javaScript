// const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,

//     getAvg(){
//         console.log(this);
//         let avg = (eng + math + phy) / 3;
//         console.log(avg);
//     }
// }  wil not work

/* 
this keyword - this keyword refers to an object that is executing the current piece of code.

*/

const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,

    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

student.getAvg();

// function getAvg() {
//     console.log(this);
// }

// getAvg();


/* 
try & catch
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block fo code to be executed,
if an error occurs in the try block.

try {
console.log(a);
} catch {
 console.log("variable a is not defined");
 }
*/

let a = 5;

try {
    console.log(a);

} catch (error) {
    console.log("caught an erro... a is not defined.");
    console.log(error);
}



/* 
Miscellaneous Topics

1. Arrow Functions
nameless function
const func = (arg1, arg2..) => {function definition}

*/

const sum = (a, b) => {
    console.log(a + b);
}

const cube = n => {
    return n * n * n;
}

console.log(cube(3));

const pow = (a, b) => {
    return a ** b;
}


const hello = () => {
    console.log("hello world");
};

console.log(pow(2, 4));
hello();


// Arrow Function -> Implicit return 
// const func = (arg1, arg2...) => (value);

const mul = (a, b) => (a * b);
const sub = (a, b) => b - a;
const add = (a, b) => b + a;
const div = (a, b) => a / b;

console.log(mul(2, 3));
console.log(sub(2, 9));



//Set Timeout
// setTimeout(function, timeout)
// 1 second = 1000
console.log("hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("Welcome to");


// Set Interval 
// setInterval(function, timeout);
// setInterval(() => {
//     console.log("Apna College");
// }, 2000);


let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

// console.log(id);

let id2 = setInterval(() => {
    console.log("Hello World");
}, 2000);

// clearInterval(id); for clearing the intervals
// clearInterval(id2);


