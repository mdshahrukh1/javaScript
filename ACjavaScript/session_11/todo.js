let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    ul.appendChild(delBtn);

    // console.log(inp.value);
    inp.value = "";
});


// Event delegation
ul.addEventListener("click", function (event) {
    // console.dir(event.target);
    // console.log("button clicked");
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});


// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }