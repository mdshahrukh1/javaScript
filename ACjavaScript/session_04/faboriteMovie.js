const favMovie = 'avatar';

let guess = prompt("guess my favorite movie");

while (guess != favMovie) { //
    if (guess != "quit") {
        console.log("You quit");
        break;
    }
    guess = prompt("Wrong guess. please try again");
}

if (guess == favMovie) {
    console.log("Congrats!!");
}
// else {
//     console.log("You quit");
// }