var binarySearch = function (nums, target) {
    let n = nums.length;//length of array
    let s = 0;
    let e = n - 1;//last index

    while (s <= e) {
        let m = Math.floor((s + e) / 2);// finding mid point of array

        if (nums[m] == target) { //equal
            return m;
        }
        else if (target > nums[m]) { //Right
            s = m + 1;
        }
        else { //left (target < nums[m])
            e = m - 1;
        }
    }
    return -1;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let target = 6;

let ans = binarySearch(nums, target);
console.log("Index of the element in this array "+ans);