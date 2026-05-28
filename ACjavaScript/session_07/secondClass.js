// this with Arrow Functions

/*
Normal function - scope this depends on calling function's object

Arrow function - lexical Scope depends on parent function's object
*/

const student = {
    name: "aman",
    marks: 95,
    prop: this,       //global scope
    getName: function () {
        AbortController.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    }
}

// student.getInfo1();
// student.getInfo2();


// Practice Question
// Write an arrow function that returns the square of a number 'n'. 
 const square = n => n * n;
//  const square = (n) => n * n;
//  const square = (n) => (n * n);
//  const square = (n) => { return n * n };
console.log(square(11));


// Write a function that prints "Hellow World" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 12000);