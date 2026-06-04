/*
async KeyWord - 
creates an async Function
it return a promise


await Keyword -
pauses the execution of its surrounding async function until the promise is settled
(resolved or rejected)


*/

// async function greet() {
//     // throw "404 page not found";
//     return "hello";
// }

// async function greet() {
//     throw "some random error";
//     // return "hello";
// }


// let hello = async () => {};

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was : ", result);
//     })
//     .catch((err) => {
//         console.log("promise was rejected with err : ", err);
//     });

// let demo = async () => {
//     return 5;
// }; 

// demo();

h1 = document.querySelector("h1");

function getNUm() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNUm();
    await getNUm();
    await getNUm();
    await getNUm();
    getNUm();
}

demo();


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
};


/*

Handling Rejections with await keyword and try catch block

*/
async function change() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);

    } catch (error) {
        console.log("error caught");
        console.log(error);
    }

    let a = 5;
    console.log(a);
    console.log("new num = ", a + 3);
}

change();
// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("green color was completed");
//         return changeColor("bllue", 1000);
//     })
//     .then(() => {
//         console.log("blue color was completed");
//     });

// callback nesting -> callback hell
// to resolve this problem we use promises and async await


let jsonRes = '{"fact": "A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952.","length": 107}'

validRes = JSON.parse(jsonRes);
// console.log(jsonRes.fact);
console.log(validRes);
console.log(validRes.fact);


let student = {
    name: "shradha",
    marks: 95,
};

let res = JSON.stringify(student);
console.log(res);

let url = "https://catfact.ninja/fact";


// fetch(url)
//     .then((res) => {
//         console.log(res);
//         res.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((err) => {
//         console.log("ERROR - ", err);
//     });


// chaining fo fetch request 

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        console.log("data1 = ", data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR - ", err);
    });

    console.log("I am happy");


/*

fetch(url) using async await

*/

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (error) {
        console.log("ERROR - ", err);
    }

    console.log("bye");
}

getFacts();