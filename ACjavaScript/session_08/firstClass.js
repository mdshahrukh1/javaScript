/*
Array Methods

forEach(), map(), filter(), some(), every(), reduce()

1. forEach() -

arr.forEach(some funtion definition or name);

*/

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};

arr.forEach(print);

//function within foreach
arr.forEach(function (el) {
    console.log(el);
});

// Arrow function
arr.forEach((el) => {
    console.log(el);
});


let object = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "shradha",
        marks: 94,
    },
    {
        name: "rajat",
        marks: 92,
    },
];

object.forEach((student) => {
    console.log(student);
    console.log(student.marks);
});


/* 
Map()

let newArr = arr.map(some function defination or name);

*/

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});


let gpa = object.map((el) => {
    return el.marks / 10;
});

console.log(double);
console.log(gpa);


/*
filter()

let newArr = arr.filter(some function definition or name);

*/

let nums = [2, 4, 1, 5, 6, 7, 8, 9, 10, 12];

let ans = nums.filter((el) => {
    return el % 2 == 0; // even -> true, odd -> false
    // return el % 2 != 0; // even -> false, odd -> true
    // return le < 5;
});

console.log(ans);


/* 
every() - returns true if every element of array gives true for some function, else return false.

arr.every(some function definition or name);
*/


let even = [2, 4, 8];
let wrong = [2, 4, 8, 9];
console.log(even.every((el) => el % 2 == 0)); // true
console.log(wrong.every((el) => el % 2 == 0)); // false


/* 
Some - returns true if some elements of array give true for some function. else return false.

arr.some(some function definition or name);

*/

console.log(even.some((el) => el % 2 == 0)); // true
console.log(wrong.some((el) => el % 2 == 0)); // true

/* 
reduce() - reduce the array to asingle value

arr.reduce(reducer function with 2 variables for (accumulator, element));

*/

let result = nums.reduce((res, el) => res + el);

let finalValue = nums.reduce((res, el) => {
    console.log(res);
    return res + el;
});

console.log(finalValue);

console.log(result);


// Finding Maximum in an array using reduce()

// let max = -1;
// for(let i = 0; i < nums.length; i++){
//     if(max < nums[i]){
//         max = nums[i];
//     }
// }
// console.log(max);

let maximum = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

console.log(maximum);


// Practice Question
// Check if all numbers in our array are multiples of 10 or not. 

let answer = nums.every((el) => el % 10 == 0);
console.log(answer);

// create a function to find the min number in an Array. 



function getMin(nums) {
    let minimum = nums.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    // console.log(minimum);
    return minimum;
}

console.log(getMin(nums));