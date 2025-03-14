
function generate(nums,result,curr, used){
    if(curr.length == nums.length){
    result.push(Array.from(curr));
    return;
    }  
      
    for(let i=0 ; i<nums.length ; i++){
        if(used[i]) continue;
        curr.push(nums[i]);
        used[i] = true;
        generate(nums,result,curr,used);
        curr.pop();
        used[i] = false
    }
}
var permute = function(nums) {
    let result = [];
    generate(nums,result,[],Array(nums.length).fill(false));
    return result;
};

let arr = [1, 2, 3];
// let n = arr.length;
console.log(permute(arr));
