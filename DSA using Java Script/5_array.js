//Segregate 0s and 1s
let arr = [0, 0, 1, 1, 0];
let n = arr.length;
let i = 0;
let j = n - 1;

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
// let result = segregateNum(arr, n) ;
console.log(arr);
