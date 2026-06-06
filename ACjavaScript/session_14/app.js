let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";


// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (error) {
//         console.log("ERROR - ", err);
//     }

//     console.log("bye");
// }

// getFacts();


let btn = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");


btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});


// using Axios fetching data 
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.fact);

    } catch (error) {
        console.log("ERROR - ", err);
        return "No fact found";
    }

    // console.log("bye");
}

// getFacts();


btn2.addEventListener("click", async () => {
    let link = await getImage();
    // console.log(link);

    let img = document.querySelector("#output");
    img.setAttribute("src", link);
});


// using Axios fetching data 
async function getImage() {
    try {
        let res = await axios.get(url2);
        // console.log(res);
        return res.data.message;

    } catch (error) {
        console.log("ERROR - ", err);
        // return "No Image found";
        return "/";
    }
}


/*
Axios 

Sending Headers

const config = { headers: {Accept: "application/json" } };
let res = await axios.get(url2, config);
console.log(res.data);


*/

const url1 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json"} }; // passing headers
        let res = await axios.get(url1, config); // passing headers in axios
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
}





let urlUniverse = "http://universities.hipolabs.com/search?name=";

// let country = "nepal";

// async function getColleges() {
//     try {
//         let res = await axios.get(urlUniverse + country);
//         console.log(res);

//     } catch (e) {
//         console.log("error : ", e);
//     }
// }

let btn3 = document.querySelector(".btn3");

// let country = "nepal";


btn3.addEventListener("click", async () => {
    // console.log("button was clicked");
    let country = document.querySelector("input").value;
    // console.log(country);
    let collArr = await getColleges(country);
    // console.log(collArr);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of collArr){
        // console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(urlUniverse + country);
        // console.log(res.data);
        return res.data;

    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}
