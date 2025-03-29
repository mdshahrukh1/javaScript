// Given an array arr[] where no two adjacent elements are same, 
// find the index of a peak element.An element is considered to be a peak 
// if it is greater than its adjacent elements(if they exist).
// If there are multiple peak elements, return index of any one of them.
// The output will be "true" if the index returned by your function is correct;
//  otherwise, it will be "false".
//  Note: Consider the element before the first element and the element after the last element to be negative infinity.


// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
// Input: arr = [10, 20, 15, 2, 23, 90, 80]
// Output: true
// Explanation: arr[1] = 20 and arr[5] = 90 are peak elements because arr[0] < arr[1] > arr[2] and arr[4] < arr[5] > arr[6]. 
// Input: arr = [1, 2, 3]
// Output: true
// Explanation: arr[2] is a peak element because arr[1] < arr[2] and arr[2] is the last element, so it has negative infinity to its right.

 function peakElement(arr) {
        // Code here
        const n = arr.length;
        for(let i = 0; i < n; i++){
            const firstElement = i === 0 ? -Infinity: arr[i-1];
            const lastElement = i === n-1 ?-Infinity: arr[i+1];
            if(arr[i] > firstElement && arr[i] > lastElement){
                return i;
            }   
        }
        return -1;
    }

    arr = [1, 2, 4, 5, 7, 8, 3];
    const a = peakElement(arr);
    console.log(a);

    // or (let i = 0; i < n; i++) {
    //     // Check if the current element is a peak
    //     if ((i === 0 || arr[i] > arr[i - 1]) && (i === n - 1 || arr[i] > arr[i + 1])) {
    //         return i; // Return the index of the peak element
    //     }
    // }

    // return -1; // This line is just a safeguard, but it won't be reached due to constraints