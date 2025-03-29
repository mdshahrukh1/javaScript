// You are given a binary array arr[], where each element is either 0 or 1. 
// Your task is to rearrange the array in increasing order in place (without using extra space). 
// You do not need to return anything; simply modify the input array.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 0]
// Output: [0, 0, 1, 1, 1]
// Explanation: After arranging the elements in increasing order, elements will be as 0 0 1 1 1.


function binSort(arr) {
    // code here
    let n = arr.length;
    let i = 0;
    let j = n - 1;
    
    while (i < j) {
        if (arr[i] == 0) {
            i++;
        }
        else if (arr[j] == 1) {
            j--;
        }
        else {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

let arr = [1, 0, 1, 1, 0];
console.log(binSort(arr));


//Segregate 0s and 1s
// let arr = [0, 0, 1, 1, 0];
// let n = arr.length;
// let i = 0;
// let j = n - 1;

// let count = 0;
// for (let i = 0; i < n; i++) {
//     if(arr[i] == 0){
//         count++;
//     } 
// }
// for(let i = 0 ;i < count; i++){
//     arr[i] = 0;
// }  
// for(let i = count ;i < n; i++){
//     arr[i] = 1;
// }


