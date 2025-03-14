let arr = [2, 1, 5, 4, 3];

// console.log(arr.reverse());
// arr.reverse();//javaScript method
// console.log(arr);

let n = arr.length;
let s = 0;
let e = n-1;

while(s < e){
    //swap ( arr[s], arr[e])
    
    let temp; // temp = a; a = b; b = temp;
    temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;

    s++;
    e--;
}
console.log(arr);