// Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

// Floor value of any number is the greatest Integer which is less than or equal to that number

// Examples:

// Input: n = 4
// Output: 2
// Explanation: Since, 4 is a perfect square, so its square root is 2.
// Input: n = 11
// Output: 3
// Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.



function floorSqrt(n) {
    if (n === 0 || n === 1) return n; 

    let start = 1, end = n, ans;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sq = mid * mid;

        if (sq === n) return mid; // Perfect square case
        else if (sq < n) {
            start = mid + 1;
            ans = mid; // Store the last valid floor value
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

// Test cases
console.log(floorSqrt(4));   // Output: 2
console.log(floorSqrt(10));  // Output: 3
console.log(floorSqrt(25));  // Output: 5
console.log(floorSqrt(26));  // Output: 5
console.log(floorSqrt(1));   // Output: 1
console.log(floorSqrt(0));   // Output: 0
