console.log("Hello World!");
console.log("Apna College");
let a = 10;
let b = 5;
console.log("sum is : ", a + b);

/* 
Template Literals

They are used to add embedded expressions in a string.
let a = 5;
let b = 10;

console.log(`Your pay ${a + b} rupees`);

*/

let pencilPrice = 10;
let eraserPrice = 5;
console.log("The total price is : ", pencilPrice + eraserPrice, "rupees. ");

let output = "The total price is : " + (pencilPrice + eraserPrice) + " rupees. ";
let total = `The total price is :  ${pencilPrice + eraserPrice} rupees.`;
console.log(output);
console.log(total);

// let a = 5;
// let b = 10;

console.log(`Your pay ${a + b} rupees`);


/* 

Operations in JS

1. Arithmatic(+, -, *, /, %, **)

2. Unary(++, --)

3. Assignment(=, +=,-=, *=, /=, %= etc..)

4. comparison Operators

Comparison Operators to compare 2 vaues.
>, >=, <, <=, ==, !=

== compares value, not type
=== compares type & value

5. Logical Operators
Logical Operators to combine expressions.

&& Logical AND

|| Logical OR

! Logical NOT


*/

b = a;
console.log(b);
console.log(b++);  //Post increment
console.log(++b); //Pre increment

// comparison Operators
let age = 18;
console.log(age > 18); // false
console.log(age >= 18); // true
console.log(age < 18); // false
console.log(age <= 18); // true
console.log(age == 18); // true
console.log(age != 18); // false

let str = "18";
console.log(age == str); //true
console.log(age === str); //false
console.log(4 != str); //true

/*
Comparison for non-numbers
Unicode or ASCII value
'a' = 61, 'b' = 62..

'A' = 41 'B' = 42..



1. conditonal Statements

if-else

nested if-else

switch


1. if Statement

Some code before if

if(some condition){
  //doing something
  }

some code after if


2. else if Statement

if(condition1){
  //Do something
 }

  else if(condition2){
   //Do something else 
   }
 
   else if(condition3){
   //do something else 
   }

here if condition false then it will check for else condition 
but if condition true then it will not check other conditions


3. else Statement
if(condition1){
  //do something
  }



  else {
    //do something else 
   for this all the above conditions have to be false.
}


4. Nested if-else
    Nesting is writing if-else inside if-else statement. It can have many levels.

*/




console.log("before my if statement");

if (age >= 18) {
    console.log("You can vote");
    console.log("You can drive");
    let a = 5;
    console.log(5 * a);
}

console.log("after my if statement");


// Q. Create a trafic light system that shows what to do based on color. 
color = "red";

// if (color === "red") {
//     console.log("Stop! light color is red");
// }

// if (color === "yellow") {
//     console.log("slow down. light color is yellow");
// }

// if (color === "green") {
//     console.log("go. light color is green");
// }

if (color === "red") {
    console.log("Stop! light color is red");
}

else if (color === "yellow") {
    console.log("slow down. light color is yellow");
}

else if (color === "green") {
    console.log("go. light color is green");
}

//else if condition
age = 14;
if (age >= 18) {
    console.log("You can vote");
}
else if (age >= 18) {
    console.log("You can vote");
}
else if (age < 18) {
    console.log("You cannot vote");
}


let marks = 75;

if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("F");
}


//else condition
color = "white";

if (color === "red") {
    console.log("Stop! light color is red");
}

else if (color === "yellow") {
    console.log("slow down. light color is yellow");
}

else if (color === "green") {
    console.log("go. light color is green");
} else {
    console.log("traffic light is broken");
}


// Practice Question
// Create a system to calculate popcorn prices based on the size customer asked for.

let size = "XL";

if (size == "XL") {
    console.log("Price is Rs. 250");
}
else if (size == "L") {
    console.log("Price is Rs. 200");
}
else if (size == "M") {
    console.log("Price is Rs. 100");
} else {
    console.log("Price is Rs. 50");
}


// Nested if-else 
marks = 45;

if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!");
}


// Logical Operators

if(marks > 33 && marks <= 80 || !(false)){
    console.log("Pass");
}


// Practice Question
// Q. A "good string" is a string theat starts with the letter 'a' & has a length > 3.
// Write a Program to find if a string is good or not.
let strr = "apple";

if((strr[0] === 'a') && (strr.length > 3)){
    console.log("Good string");
} else {
    console.log("Not a good string");
}


// Q2. Predict the output
let num = 12;

if((num % 3 == 0) && ((num + 1 == 15) || (num - 1 == 11))){
    console.log("safe");
} else {
    console.log("unsafe");
}


// Alert & Prompt 
// Alert displays an alert message on the page. 

// alert("something is wrong!");

// Prompt displays a dialog box that asks user for some input. 

// Prompt("please enter your roll no.");

alert("This is a simple alert");
console.log("this is a simple log");
// console.error("this is an error message");
// console.warn("this is a warning message");

let firstName = prompt("Please enter your name : ");
console.log(firstName);