const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const output = arr.map(binary);
console.log(output);

//writng function in map method
 const out = arr.map(function triple(x){  //higher order functions
    return x*3;
});
console.log(out);

const outputs = arr.map((x) => { //using arrow function
    return x.toString(2);
});


const ou = arr.map((x) => x.toString(2));// arrow  function
console.log(ou);