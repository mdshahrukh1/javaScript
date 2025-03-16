const arr = [5, 1, 3, 2, 6];

//filter odd values

function isOdd(x){
    return x % 2;
}


function isEven(x){
    return x % 2 === 0;
}


function graterThan4(x){
    return x>4;
}

//writing function inside the filter method
const output = arr.filter(function graterThan4(x){
    return x>4;
});
console.log(output);

//Arrow function
const out = arr.filter((x) => x % 2);
console.log(out);