/* 
truthly & falsy 

Everything in JS is true or false (in boolean context).
This doesn't mean their value itseft is false ot true, but they are treated as false or true if taken in boolean context.


Falsy values
false, 0, -0, On (BigInt value), ""(empty string), null, undefined, NaN

Truthly values

Everything else


*/

if (null) {
    console.log("It hs true value");
} else {
    console.log("It has false value");
}

if (" ") {
    console.log("It hs true value");
} else {
    console.log("It has false value");
}

let string = " ";

if (string) {
    console.log("String is not empty");
} else {
    console.log("String is empty");
}

let num = -10;

if (num) {
    console.log("num is not equal to 0");
} else {
    console.log("num is equal to 0");
}


/* 
Switch Statement - Used when we have some fixed values that wwe need to compare to.

*/
let color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("light is broken");
        break;
}

console.log("after switch statement");

// Practice Question
//Q. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// 1 = Monday, 2 = Tuesday & so on 

let day = 8;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Wrong Day");
        break;
}