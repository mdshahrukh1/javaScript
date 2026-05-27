// User enters a max number & then tries to guess a random generated numbeer between 1 to max.

const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number or write 'quit' to quit the game");

while (true) {
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if (guess < random){
        guess = prompt("hint: your guess was too small. please try again");
    } else {
        guess = prompt("hint: Your guess was too large. please try again.");
    }
}