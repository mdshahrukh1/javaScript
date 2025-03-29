// Given an array arr[] containing positive elements. A and B are two numbers defining a range. The task is to check if the array contains all elements in the given range (inclusive).

// Note: If the array contains all elements in the given range return true otherwise return false.

// Examples :

// Input: n = 7, A = 2, B = 5, arr[] =  {1, 4, 5, 2, 7, 8, 3}
// Output: True
// Explanation: It has all elements between range 2-5 i.e 2,3,4,5.
// Input: n = 7, A = 2, B = 6, arr[] = {1, 4, 5, 2, 7, 8, 3}
// Output: False
// Explanation: The array does not contain 6 hence it do not contains all elements in the range 2-6, the output is No.


function check_elements(arr, n, A, B) {
    // code here
    let numSet = new Set(arr);
    
    for(let i = A; i <= B; i++){
        if(!numSet.has(i)){
            return false;
        }
    }
    return true;
}