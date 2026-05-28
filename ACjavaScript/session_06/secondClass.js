/* 
reurn - return keyword is used to return some value from the function.

input -> Function(does some work) -> output

function funcName(arg1, arg2..){
//do something

return val;

}


*/

let arr = [1, 2, 3, 4];
let part = arr.slice(2, 4);

console.log(part);

function sum(a, b) {
    console.log("hello");
    console.log("hello");

    return a + b;
    // console.log("hello"); it will not execute after return statement
    // console.log("hello");

}

// let s = sum (3, 5);
// console.log(s);

console.log(sum(3, 4));

console.log(sum(sum(1, 2), 3));


function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(isAdult(13));
console.log(isAdult(18));

// For returning multiple values we use Array or object.


// Practice Question
// Create a Function that returns the sum of numbers from 1 to n. 

function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(10));
console.log(getSum(100));
console.log(getSum(1000));
console.log(getSum(10000));

// Create a Function that returns the concateation of all strings in an Array. 

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }

    return result;
}

console.log(concat(str));


