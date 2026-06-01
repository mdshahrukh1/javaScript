// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     // alert("button was clicked");
// };


// function sayHello () {
//     alert("Hello");
// }
// // btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// // for(bt of btns){
// //     bt.onclick = sayHello;

// //     bt.onmouseenter = function () {
// //         console.log("you entered a button");
// //     }
// // }

// // Event Listener - addEventListener

// //element.addEventListner(event, callback);

// function sayName () {
//     alert("Apna College");
// }


// for(bt of btns){
//     // bt.addEventListener("click", sayHello);
//     // bt.addEventListener("click", sayName);

//     bt.addEventListener("dblclick", function () {
//         console.log("You double clicked me.");
//     });
// }


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerHTML = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;


    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}


let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para was clicked");
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("Mouse inside div");
})