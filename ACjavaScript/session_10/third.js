let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    // console.log(event);
    // console.log(event.key);
    console.log(event.code);
    // console.log("key was pressed");

    // ArrowUP, ArrowDown, ArrowLeft, ArrowRight

    if (event.code == "ArrowUp") {
        console.log("character moves forward");

    } else if (event.code == "ArrowDown") {
        console.log("character moves backward");

    } else if (event.code == "ArrowLeft") {
        console.log("Character moves left");

    } else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }

});

// inp.addEventListener("keyup", function () {
//     console.log("key was released");
// });



