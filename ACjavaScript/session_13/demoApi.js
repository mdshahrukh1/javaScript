/*

API - Application Programming Interface.

Some Random APIs

https://catfact.ninja/fact (sends random cat facts)

https://www.boredapi.com/api/activity (sends an activity to do when bored)

https://dog.ceo/api/breeds/image/random (sends cute dog pictures)



some api's are free where we don't have to use any key or paid.

some api's are free where we have use any key but we don't have to pay.

some api's are not free where we have to use any key & pay also.


XML - Extensible Markup Language (XML)

JSON - JavaScript Object Notation (www.json.org)
we can use online JSON validator to check the data.


Accessing Data from JSON

JSON.parse(data) Method - To parse a string data into a js object

JSON.stringify(json) Method - To parse a JS object into JSON.



Testing API request

Tools - Hoppscoth, Postman


Ajax - Asynchronous JavaScript and XML
AJAJ

Https verbs
GET

POST

DELETE

more....



status code 

200 - ok (successful request)

404 - Not Found (client side)

400 - Bad Request (clietn side)

500 - Internal Server Error (server side)

starting from 300 is for redirect

more....


Add Information in URLs

https://www.google.com/search?q=harry+porter

url: id; url:num; url:q; {{id}}; <id>  = pass valid id

key = q
value = harry+porter


use = https://api.potterdb.com

for college = http://universities.hipolabs.com/search?name=india


http headers-
----------------

header, value

metaData = data about data

request header-


response header -

link for dadjoke- GET https://icanhazdadjoke.com/

Before we have used HMLHTTPRequestObj.

Request
using Fetch

fetch(url);


*/

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



let url = "https://catfact.ninja/fact";
fetch(url);