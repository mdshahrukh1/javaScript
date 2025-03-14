function generate(arr, result, curr, start) {
// if (i == nums.length) {
// }
    result.push([...curr]);
    
    for (let i = start; i < arr.length; i++) {
        //push
        curr.push(arr[i]);
        //generate
        generate(arr, result, curr, i+1);
        //remove
        curr.pop();
    }
}

function subsets(arr) {
    let result = [];
    generate(arr, result, [], 0);
    return result;
}

let arr = [1, 2, 3];
// let n = arr.length;
console.log(subsets(arr));
