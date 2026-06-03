/*
function call()

function hello() {
    console.log(hello);
}

hello();

Stack - It is a data structure which follow Last in First out(LIFO or FILO) property.

*/


function hello() {
    console.log("inside hello function");
    console.log("hello");
}

function demo() {
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();
console.log("done, bye!");


function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


// Breakpoints in browser
// callstack in browser


// JS is a single Threaded Language. here helps us callbacks, setTimeout, setInterval...
// Browser do the work of 

// Synchronus nartur to Asynchronus

setTimeout(() => {
    console.log("Apna college");
}, 2000);

setTimeout(() => {
    console.log("hello world");
}, 2000);

console.log("hello...");

/*
Promises
The promise object represents the eventual completion(or failure) of an asynchronous operartion and its resulting value.

*/

function saveDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        // console.log("your data was saved");
        success();
    } else {
        // console.log("weak connection. data not saved");
        failure()
    }
}

// saveDb("Apna college");

saveDb(
    "Apna college",
    () => {
        console.log("success : your data was saved");

        saveDb("hello world",
            () => {
            console.log("success2 : data2 saved");

            saveDb(
                "Shahrukh",
                () => {
                    console.log("success3 : data3 saved");
                },
                () => {
                    console.log("failure3 : weak connection");
                }
            );
        }, 

        () => {
            console.log("failure2 : weak connection");
        });
    },

    () => {
        console.log("failure : weak connection. data not saved");
    }
);
