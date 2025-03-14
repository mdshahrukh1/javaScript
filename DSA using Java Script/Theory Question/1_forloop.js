//Pair Sum Question with for loop

function sumOfTwoElements(arr, target){
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }   
        } 
    }
    return null;
    //return -1;
}

let arr = [1, 9, 0, 7, 5];
let target = 12;
let result = sumOfTwoElements(arr, target);

if (result) {
    console.log(`Output: ${result[0]}, ${result[1]}`);
} else {
    console.log("No such pair found.");
}

//this code only for sorted array
// function sumOfTwoElements(arr1, n, x){
//     let i = 0;
//     let j = n - 1;
//     //arr.sort();

//     while (i < j) {
//         if (arr1[i] + arr1[j] == x) {
//             return true;
//         }
//         else if(arr1[i] + arr1[j] < x){
//             i++;          
//         }
//         else{//(arr[i] + arr[j] > x)
//             j--;
//         }
//     }
//     return false;
// }


// let arr1 = [4, 7, 11, 13, 19, 25];
// let n = arr1.length;
// let x = 24;//target

// console.log(sumOfTwoElements(arr1, n, x));

