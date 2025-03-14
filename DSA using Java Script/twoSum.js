const twoSum = (array, target) => {
    let index = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] == target){
                index.push(array[i]);
                index.push(array[j]);
            }
        }
    }
    return index;
}
console.log(twoSum([1,2,3], 5));