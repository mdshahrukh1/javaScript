function bubbleSort(nums) {
    let n = nums.length;

    for(let i = 0; i < n-1; i++){  //No of passes = n - 1
        for (let j = 0; j <= n - 1 - i; j++) {  //Comparison
            if(nums[j] > nums[j + 1]){
                //swap
                let temp; // temp = a; a = b; b = temp;

                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
            
        }

    }
    return nums;
}


let nums = [2, 1];
let sorted = bubbleSort(nums);
console.log(sorted);


function bSort(num) {
    let n = num.length;
    for(let i = 1; i < n; i++){
        for(let j = 1; j <= n-i; j++){
            if(num[j] < num[j-1]){
                //Swap
                let temp;
                temp = num[j];
                num[j] = num[j-1];
                num[j-1] = temp;
            }
        }
    }
    return num;
}

let num = [5, 3, 1 , 7, 8, 2];
let sort = bSort(num);
console.log(sort);