//Find the missing element of an array
function missingNumber(arr, n) {
    let total = n* (n + 1)/2; // Expected sum
    //console.log(total);

    let l = arr.length; //defining array lenght
    let arraysum = 0;  //defining sum of array

    for (let i = 0; i < l; i++) {
        arraysum += arr[i];
    }
    
    let ans = total - arraysum;
    return ans;
}

    let arr = [1, 2, 3, 4, 10, 6, 7, 8, 9];
    //let n = 10;
    let output = missingNumber(arr, 10);
    console.log(output);


