let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function chageColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
}

btn.addEventListener("click", chageColor);

p.addEventListener("click", chageColor);

h1.addEventListener("click", chageColor);

h3.addEventListener("click", chageColor);

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button was clicked");
// });

btn.addEventListener("dblclick", function(event) {
    console.log(event);
    console.log("button was clicked");
});