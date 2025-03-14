let arr = [3, 4, 1, 5, 2]; //like selection sort
let n = arr.length;
let max = arr[0]; // for array's value 
let maxindex = 0; // for array's index
let min = arr[0]; // for array's value
let minindex = 0; // for array's index

for (let i = 1; i < n; i++) {
    if(arr[i] > max) {
        max = arr[i];
        maxindex = i;
    } 
    if(arr[i] < min){
        min = arr[i];
        minindex = i;
    }   
}

console.log("Maximum value of Array  "+ max);
console.log("Max Value's index "+ maxindex);

console.log(`Minimum Value of Array ${min}`);
console.log(`Min Value's of Array ${minindex}`);