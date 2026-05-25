/* 
Array(Data Structure) - Linear collections of things.
linear collections of similar data.

*/

let students = ["Aman", "Shradha", "Shahrukh", "Shahnawaz"];
console.log(students);

let nums = [2, 4, 5, 6, 8];

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums.length);
console.log(typeof(nums)); //object

let info = ["Shahrukh", 25, 7.93]; //mixed array

// empty array 
let newArr = [];



//Arrays are mutable
let fruits = ['mango', 'apple', 'litchi'];

fruits[0] = "banana";

console.log(fruits);

fruits[10] = "papaya";

console.log(fruits);
console.log(fruits.length);


/* 
Array Methods 

push() - add to end

unshift() - add to start

pop() - delete from end & returns it

shift() - delete from start & returns it

indexOf() - returns index of something

includes() - search for a value

concat() - merge two arrays

reverse() - reverse an array

slice() - copies a portion of array

splice() - removes / replaces / add elements in place 


*/

let cars = ['audi', 'bmw', 'xuv', 'maruti'];

cars.push('toyota');
cars.push('ferrari');

console.log(cars);

cars.pop();

console.log(cars);

cars.unshift('toyota');

console.log(cars);

cars.shift();

console.log(cars);


// Practice Question

let months = ["january", "july", "march", "august"];

console.log(months);

months.shift();
months.shift();
console.log(months);

months.unshift("june");
months.unshift("july");
console.log(months);

console.log(months.indexOf("march"));
console.log(months.includes("august")); //true
console.log(months.includes("january")); //false


let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

let allcolors = primary.concat(secondary);

console.log(allcolors)
console.log(primary.concat(secondary));

console.log(primary);
console.log(secondary);

console.log(secondary.concat(primary)); // create & gives a new array
console.log(secondary.concat(secondary));

// reverse() - reverse an array
console.log(primary.reverse()); // chnages on original array
console.log(allcolors.reverse()); 


// slice() - copies a portion of array
// It crate a copy but don't change the original array

console.log(allcolors.slice());
console.log(allcolors.slice(2, 3));
console.log(allcolors.slice(3));
console.log(allcolors.slice(-2));

//splice() - removes / replaces / add elements in place 
// splice(start, deleteCout, item0...itemN) 
// Is changes in Original array.

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

// console.log(colors.splice(3));
// console.log(colors.splice(0, 1)); // (starting point, delete count)
// console.log(colors.splice(0, 0, "red", "yellow", "blue"));
console.log(colors);
console.log(colors.splice(1, 1, "white"));
console.log(colors);



// sort() - sorts an array

console.log(cars.sort());

let marks = [99, 89, 67, 42, 100];

console.log(marks.sort()); //[100, 42, 67, 89, 99]

// because sort() method converts numbers to string 




// Practice Question

let monthsArr = ["january", "july", "march", "august"];

let sNew = monthsArr.splice(0, 2, "july", "june");

console.log(monthsArr);
console.log(sNew);

//Practice

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#"];

lang.push("sql");

console.log(lang.reverse().indexOf("javascript"));

// Array References means Addresses in memory

// console.log([] == []); //false
// console.log([1] == [1]); // false
// console.log([1] === [1]); // false

// Constant Array, we can't change address in it

const g = 10;
const arr = [1, 2, 3];
arr.push(4);
arr.pop();
console.log(arr);
// arr = [2, 5, 6, 7]; // this will give an error


// Nested Arrays or Multidimentional Arrays

let numbers = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);

// Practice Question

let game = [['x', null, 'o'], [null, 'x', null], ['o', null, 'x']];
game[0][1] = 'o';
console.log(game);
