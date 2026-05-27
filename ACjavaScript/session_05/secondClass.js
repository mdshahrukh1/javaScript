/* 
Math Object

Properties
Math.PI

Math.E


Methods 

Math.abs(n)
Math.pow(a, b)
Math.floor(n)
Math.ceil(n)
Math.random()


*/

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-12.5));
console.log(Math.pow(2, 10));

console.log(Math.floor(5.5)); 
//round of to nearest smallest Integer value
console.log(Math.floor(-5.5));

console.log(Math.ceil(5.01));

console.log(Math.random()); 
// gives ramdom numbers from 0 to 1.


// Random Integers

// From 1 to 10

let step1 = Math.random();

let step2 = step1 * 10;

let step3 = Math.floor(step2);

let num = step3 + 1;

console.log(num); // from 1 to 10

console.log(Math.floor(Math.random() * 10) + 1);

// Practice Question 

// Generate a random number between 1 to 100.

console.log(Math.floor(Math.random() * 100) + 1);
// +1 starting point
// * 100 ending point