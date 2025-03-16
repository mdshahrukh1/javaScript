const arr = [5, 1, 3, 2, 6];

//sum or maximum number  of this array

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        
    }
    return sum;
}
console.log(findSum(arr));

//reduce method
const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);//initial value of accu
console.log(output);

const out = arr.reduce(function(max, curr){
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(out);