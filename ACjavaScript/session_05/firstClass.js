// JS Object Literals 
// Used to store keyed collections & complex entities. 

// property => (key, value) pair 

// Objects are a collection of properties 

/* 
let delhi = {
    lattitude: "28.7041 N",
    longitude: "77.1025 E"
};

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

*/

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};


/* 
Thread / Twiter Post
Create an object literal for the properties of thread/ twitter post which includes-
username, content, likes, reposts, tags
*/

const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes: 150,
    repost: 5,
    tags: ["@apnacollege", "delta"]
}
console.log(post);


// Get Values / Access values 
// student["name"]
// or 
// student.name

console.log(post.username);
console.log(post.tags);
console.log(post["likes"]);
console.log(post["content"]);

let prop = "repost";
// Whenever we use variable we have to use [] to access value
console.log(post[prop]); // 5
console.log(post.prop); // undefined

/* 
Get Values
JS automatically converts objects keys to strings.

Even if we made the number as a key, the umber will be converted to string.

*/

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);
console.log(obj[1]);



/* 
Add / Update Value

Change the city to "Mumbai"

Add a new property, gender: "Female"

Change the marks to "A"
*/

console.log(student);

student.city = "Mumbai";

student.gender = "Female";

student.marks = "A";

console.log(student);

student.marks = [99, 89, 94];

console.log(student);

delete student.marks;

console.log(student);



/*
Object of Objects
Storing information of multiple students

*/

const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
}

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.shradha.city);


/*
Array of Objects - Storing information of multiple students

*/

const classIn = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "O",
        city: "Mumbai"
    }
];

console.log(classIn);
console.log(classIn[0]);
console.log(classIn[0].name);

classIn[1].gender = "female";

console.log(classIn[1]);