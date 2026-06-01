let form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");

    // alert("form submitted");
    console.dir(form);
    console.log(form.elements[0]);

    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#password");

    let user = this.elements[0]; // form.elements[0]
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});


// Text Editor using paragraph & input
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;
});

/*

Form Events
Extracting Form Data


Change event
The change event occurs when the value of an element has been changed(only works on <input>, <textarea>
and <select> elements).

input event
The input event fires when the value of an <input>, <select> or <textarea> element has been changed.

*/
