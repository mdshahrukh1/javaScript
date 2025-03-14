let marks = [95, 98, 92, 94, 96];

marks.forEach(function(i){
    console.log(i);
});

//arrow function
marks.forEach(i => console.log(i));

//sum of elements in array using arrow function
let sum = 0;
marks.forEach(i => sum += i);
console.log(sum);