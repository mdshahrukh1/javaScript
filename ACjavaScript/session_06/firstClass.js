/* 
// Functions in Js
Different type fo functions in JS
Function Definition(telling JS)

function funcName(){
   //do something
   
   }

   Function Calling(Using the function)

   funcName();

*/

function hello() {  // creatiing a function
    console.log("hello world");
}

hello(); // function calling
hello(); // function calling


function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = 18;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}


print1to5();

isAdult();

// Practice Question
// Create a function that prints a poem

function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder, what you are ?");
}

printPoem();


// Create a Function to roll a dice & 
// always displays the value of the dice(1 to 6).

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();

/* 
Functions with Arguments - Values we pass to the function

function name(arg1, arg2..) {
    //do something
}

order is important in functions
*/

function printName(name) {
    console.log(name);
}

printName("Md Shahrukh");
printName("Md Shahrukh");
printName("Md Shahrukh");

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Shradha", 23);
printInfo("Rajat", 19);
printInfo("Asif");
printInfo(14);



function sum(a, b) {
    console.log(a + b);
}

sum(1, 2);


// Create a Function that gives us the average of 3 numbers.

function calculateAVg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calculateAVg(6, 9, 10);

// Create a Function that prints the multiplication table of a number.

function printTable(n) {
    let j = 1;
    for(let i = n; i <= n * 10; i += n){
        console.log(`${j} * ${n} = ${i}`);
        j++;
    } 
}

printTable(7);




