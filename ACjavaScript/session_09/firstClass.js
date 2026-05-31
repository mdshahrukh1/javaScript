// DOM(Document Object Model)
// The DOM represents a document with a logical Tree. 

// It allows us to manipulate/change webpage content(HTML elements). 

// console.dir(document);
// console.dir(document.all);


/* Selecting Elements

getElementById() - Returns the Element as na object or null (if not found).
// let imgObj = document.getElementById("mainImg");

getElementByClassName() - Returns the Elements as an HTML Collection or empty collection(if not found).

// let imgObj = document.getElementByClassName("oldImg");

getElementsByTagName() - Returns the Elements as an HTML Collection or empty collection(if not found).
// let obj = document.getElementsByTagName("p");

Query Selectors - Allows us to use any CSS selector

document.querySelector("p")); // Selects first p element

document.querySelector("#description")); // Selects first element with id = description

document.querySelector(".oldImg")); // Selects first element with class = oldImg

console.dir(document.querySelectorAll("p")); //Selects all a elements

*/

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerHTML = "I'm in a div";
para2.innerHTML = "ME Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);