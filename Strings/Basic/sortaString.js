// Given a string consisting of lowercase letters, arrange all its letters in ascending order. 

// Example 1:

// Input:
// S = "edcab"
// Output: "abcde"
// Explanation: characters are in ascending
// order in "abcde".





    //Function to sort the given string.
   function sortString(s)
    {
        //your code here
        return s.split('').sort().join('');
    }

    let s = "edcab";
    console.log(sortString(s));
// Output: "abcde"




    //Function to sort the given string.
//    function sort(s)
//     {
//         //your code here
//         let arr = s.split('');
//         let n = arr.length;
        
//         for(let i = 0; i< n-1; i++){
//             for(let j = 0; j < n-i-1; j++){
//                 if(arr[j] > arr[j+1]){
//                     let temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//             }
//         }
//         return arr.join('');
//     }