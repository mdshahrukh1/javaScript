/*
for loop

for(initialisation; condition; updation){
  //do something
  }

  for(let i = 1; i <= 5; i++){
  console.log(i);
  }
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i = i - 3) {
    console.log(i);
}

// Print all odd Numbers(1 to 15)

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

//backward
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}

// Print all even Numbers(1 to 10);

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

//backward
for (let i = 10; i >= 0; i = i - 2) {
    console.log(i);
}


//Infinite Loops

// for(let i = 1; i >= 0; i++){

// }

// for(let i = 1; i <= 5; i--){

// }

// for(let i = 1;  ; i++){

// }


// Print table of 5

for(let i = 5; i <= 50; i = i + 5){
    console.log(i);
}

// let n = prompt("Write your number : ");
// n = parseInt(n);
// for(let i = n; i <= n * 10; i = i + n){
//     console.log(i);
// }


// Nested for loop 

for(let i = 1; i <= 3; i++){
    console.log(`Outer loop ${i}`);
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

/*

// While loop

while (condition) {
    //do something
}

*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Backward
i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}


// break keyword

let j = 1;
while (j <= 5) {
    if(j == 3){
        break;
    }
    console.log(j);
    j++;
}

// Loops with Arrays 

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

fruits.push("pineapple");

for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

//Even index
for(let i = 0; i < fruits.length; i += 2){
    console.log(i, fruits[i]);
}

//Odd index
for(let i = 1; i < fruits.length; i = i + 2){
    console.log(i, fruits[i]);
}

for(let i = fruits.length; i >= 0; i--){
    console.log(i, fruits[i]);
}



//Nested Loops with Nested Arrays

let heroes = [["ironman", "spiderman", "thor",], ["superman", "wonder women", "flash"]];

for(let i = 0; i < heroes.length; i++){
    console.log(i, `List # ${i}`);

    for(let j = 0; j < heroes[i].length; j++){
        console.log(j, heroes[i][j]);
    }
}

let student = [["aman", 95], ["shradha", 94.4], ["karan", 100]];

for(let i = 0; i < student.length; i++){
    console.log(`Info of student # ${i + 1}`);

    for(let j = 0; j < student[i].length; j++){
        console.log(student[i][j]);
    }
}


// for of loop
/*

for( element of collection){
    // do something;
}

*/

for(let fruit of fruits){
    console.log(fruit);
}

for(char of "apnacollege") {
    console.log(char);
}


// Nested 

for(list of heroes){
    console.log(list);
    
    for(hero of list){
        console.log(hero);
    }
}