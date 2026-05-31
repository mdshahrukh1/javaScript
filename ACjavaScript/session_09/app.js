// document.all[8].innerText = "Peter Parker";

// let imgObj = document.getElementById("mainImg");

// console.log(imgObj);

// getElementById() - Returns the Element as na object or null (if not found).
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);


// getElementByClassName() - Returns the Elements as an HTML Collection or empty collection(if not found).
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
    smallImages[i].src = "assets/spiderman_img.png";

    console.log(`value of image no. ${i} is changed`);
}

// getElementsByTagName() - Returns the Elements as an HTML Collection or empty collection(if not found).
let obj = document.getElementsByTagName("p");
console.log(obj);


// Query Selectors - Allows us to use any CSS selector

console.dir(document.querySelector("p"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));


// Using Properties & Methods

/*

innerText - Shows the visible text contain in a Node. 

textContent - Shows all the full text. 

innerHTML - Shows the full markup

*/

let heading = document.querySelector('h1');
let para = document.querySelector('p');
console.log(heading);

para.innerText = "Hi, I am Peter Parker";
para.innerHTML = "Hi, I am <b>Peter Parker</b>";

heading.innerHTML = `<u>${heading.innerText} </u>`;


/* 
Manipulating Attributes

obj.getAttribute(attr); // getters

obj.setAttribute(attr, val); // setters
*/

let img = document.querySelector('img');

img.setAttribute('id', 'spiderman');

console.log(img.getAttribute('class'));
img.setAttribute('class', 'images');

console.log(img.getAttribute('class'));


/* 
Manipulating Style

style Property
obj.style

*/

// let heading = document.querySelector('h1');
heading.style.color = 'green';
heading.style.backgroundColor = "yellow";

let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "green";
// }

for(let link of links){
    link.style.color = "green"; // inline style so, we don't use it regularly
}


/*
using classList
obj.classList

classList.add() to add new classes

classList.remove() to remove classes

classList.contains() to check if class exists

classList.toggle() to toggle between add & remove
*/

heading.classList.add("abc");

let c = heading.classList;
console.dir(c);

heading.classList.remove("abc");

heading.setAttribute('class', 'green'); // for adding a single, it will replace all the other classes. 

heading.classList.contains("abc"); //false

heading.classList.toggle("underline"); // if exists then remove or if not exists then add

console.log(heading.classList);


/* 
Navigation

parentElement

children

previousElementSibling / newElementSibling
*/

let h4 = document.querySelector('h4');

console.log(h4.parentElement);

let box = document.querySelector('.box');

console.log(box.children);

let ul = document.querySelector('ul');

console.log(ul.parentElement);
console.log(ul.childElementCount);

console.log(ul.children);

console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

img.previousElementSibling.style.color = "green";


/* 

Adding Elements

document.createElement('p');

appendChild(element);

append(element); add at last

prepend(element); add at first

insertAdjacentElement(where, element); where and what to add

insertAdjacent(afterbegin, element); where and what to add
insertAdjacentElement('beforebegin', element); where and what to add
insertAdjacentElement('beforeend', element); where and what to add
insertAdjacentElement('afterend', element); where and what to add
*/

let newP = document.createElement('p');

console.dir(newP);

newP.innerText = "Hi, I am a new P";

console.dir(newP);


let body = document.querySelector('body');

body.appendChild(newP);

newP.append(" this is a new text");

/* 
Remove Elements

removeChild(element);

body.removeChild(btn);

remove(element);

newP.remove();

*/