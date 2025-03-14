function BinarySearch(arr, s, e, target){
    if(s > e){
        return -1;
    }
    let m = Math.floor((s+e)/2);
    if(target == arr[m]){
        return m;
    }
    else if(target < arr[m]){
        return BinarySearch(arr, s, m-1, target); //left
    }
    else { //(target > arr[m])
        return BinarySearch(arr, m+1, e, target); //right
    }
}

let arr = [1, 3, 5, 6, 8, 9, 12];
let n = arr.length;
let target = 9;
let s = 0;
let e = n-1;
console.log(BinarySearch(arr, s, e, target));