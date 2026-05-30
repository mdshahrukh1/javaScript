/*
Default Parameters - Giving a default value to the arguments.

function func (a, b = 2){
//do something
}

*/

// function sum(a = 2, b) {
//     return a + b;
// }

// sum(1, 3); // 4
// sum(1); // a = 1, b = undefined


function sum(a, b = 2) {
    return a + b;
}

console.log(sum(2));


/*

spread - Expands an iterable into multiple values.

function func (...arr){
//do something.
}

*/

let nums = [2, 4, 1, 5, 6, 7, 8, 9, 10, 12];

console.log(...nums);

console.log(Math.min(...nums));

nums.push(-1);

console.log(Math.min(...nums));
console.log(Math.max(...nums));

console.log(..."apnacollege");


// Array literals

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr]; // copy of original array

let chars = [..."hello"];

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];

let num = [...even, ...odd];

console.log(num);




// Object Literals

const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = { ...data, id: 123, country: "India" };

let obj1 = { ...arr };  //obj -> key : val

let obj2 = { ..."hello" };

console.log(dataCopy);
console.log(obj1); // index will become key
console.log(obj2);// index will become key



/* 
Rest - Allows a function to take an indefinite number of arguments and bundle them in an array.

*/


function sum(...args) {
    //arguments
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us : ", args[i]);
    }
}


// function min (){
//     console.log(arguments);
//     console.log(arguments.length); //arguments is not an array.
//     // arguments.push(1); it will give us error
// }

sum(1, 2, 3, 4);
min(1, 2, 3, 4);

function summation(...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log(summation(9, 8, 7, 6));

function min(msg, ...args) {
    console.log(msg);

    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

console.log(min("hello", 12, 455, 123, -20));



// Destructuring - Storing values of array into multiple variables.

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];

// let winner = names[0];
// let runerup = names[1];
// let secondrunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;

console.log(winner);
console.log(others);



// Destructuring object 

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subject: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
    city: "pune",  // highest prefrence
};

// let username = student.username;
// let password = student.password;

let {username, password} = student;
console.log(username, password);

let {username: user, password : secret, city: place = "Mumbai"} = student;
console.log(user, secret);

console.log(student.city);
