// Given an array arr[]. The task is to rotate the array by d elements where d ≤ arr.size.

// Examples:

// Input: arr[] = [-1, -2, -3, 4, 5, 6, 7], d = 2
// Output: [-3, 4, 5, 6, 7, -1, -2]
// Explanation: 
// Rotate by 1: [-2, -3, 4, 5, 6, 7, -1]
// Rotate by 2: [-3, 4, 5, 6, 7, -1, -2]

function leftRotate(arr, d) {
    // code here
    let n = arr.length;
    d = d % n;
    
    function reverse(start, end){
        while (start < end){
             let temp = arr[start];
             arr[start] = arr[end];
             arr[end] = temp;
             start++
            end--;
            }
        }
        reverse(0, d - 1);
        
        reverse(d, n-1);
        
        reverse(0, n-1);
        
        return arr;
}