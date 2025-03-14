//this code only for sorted array
function sumOfTwoElements(arr, n, x){
    let i = 0;
    let j = n - 1;
    //arr.sort();

    while (i < j) {
        if (arr[i] + arr[j] == x) {
            return true;
        }
        else if(arr[i] + arr[j] < x){
            i++;          
        }
        else{//(arr[i] + arr[j] > x)
            j--;
        }
    }
    return false;
}


let arr = [4, 7, 11, 13, 19, 25];
let n = arr.length;
let x = 24;//target

console.log(sumOfTwoElements(arr, n, x));

