//callback hell
h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// };

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
};

changeColor("red", 1000)
    .then(() => {
        console.log("red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color was completed");
        return changeColor("bllue", 1000);
    })
    .then(() => {
        console.log("blue color was completed");
    });

// callback nesting -> callback hell 
// to resolve this problem we use promises and async await


/*
Promises(Object)
The promise object represents the eventual completion(or failure) of an asynchronous operartion and its resulting value.

promise has resolve & reject two callbacks

three state of rpomise 
pending -
reject - (error)
fulfilled - (resolved)


then() & catch() methods

*/

// function saveDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         // console.log("your data was saved");
//         success();
//     } else {
//         // console.log("weak connection. data not saved");
//         failure()
//     }
// }

// saveDb("Apna college");

// saveDb(
//     "Apna college",
//     () => {
//         console.log("success : your data was saved");

//         saveDb("hello world",
//             () => {
//                 console.log("success2 : data2 saved");

//                 saveDb(
//                     "Shahrukh",
//                     () => {
//                         console.log("success3 : data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },

//             () => {
//                 console.log("failure2 : weak connection");
//             });
//     },

//     () => {
//         console.log("failure : weak connection. data not saved");
//     }
// );



function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            // console.log("your data was saved");
            resolve("success : your data was saved");
        } else {
            // console.log("weak connection. data not saved");
            reject("failuer : weak connection");
        }
    });
}

// let request = savetoDb("Apna college"); // req = promise object
// // console.log(request);

// request
//     .then(() => {
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });


// savetoDb("Apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// savetoDb("Apna college")
//     .then(() => {
//         console.log("promise was resolved");

//         savetoDb("Hello world").then(() => {
//             console.log("data2 saved");
//         });
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


//promise chaining

// savetoDb("Apna college")
//     .then(() => {
//         console.log("promise was resolved");
//         return savetoDb("Hello world");
//     })
//     .then(() => {
//         console.log("data2 saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// savetoDb("Apna college")
//     .then(() => {
//         console.log("data1 saved");
//         return savetoDb("Hello world");
//     })
//     .then(() => {
//         console.log("data2 saved");
//         return savetoDb("Shahrukh");
//     })
//     .then(() => {
//         console.log("data3 saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


savetoDb("Apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log("Result of promise : ", result);

        return savetoDb("Hello world");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("Result of promise : ", result);

        return savetoDb("Shahrukh");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("Result of promise : ", result);

    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise : ", error);
    });