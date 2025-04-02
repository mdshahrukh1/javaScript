// Nearest multiple of 10
// Difficulty: EasyAccuracy: 19.32%Submissions: 96K+Points: 2
// A string s is given to represent a positive number. The task is to round str to the nearest multiple of 10.  
// If you have two multiples equally apart from s, choose the smallest element among them.

// Examples:

// Input: s = "29" 
// Output: 30
// Explanation: Close multiples are 20 and 30, and 30 is the nearest to 29. 
// Input: s = "15"
// Output: 10
// Explanation: 10 and 20 are equally distant multiples from 20. The smallest of the two is 10.


function roundToNearestMultipleOf10(s) {
    // Ensure the input remains a string and preserve leading zeros
    let len = s.length;
    let num = s.padStart(len, '0'); // Ensures leading zeros remain

    // Get the last digit
    let lastDigit = parseInt(num[len - 1], 10);

    // Decide whether to round up or down
    if (lastDigit > 5) {
        // Round up by adding (10 - lastDigit) to the number
        let roundedNum = (BigInt(num) + BigInt(10 - lastDigit)).toString();
        return roundedNum.padStart(len, '0'); // Preserve leading zeros
    } else {
        // Round down by subtracting lastDigit from the number
        let roundedNum = (BigInt(num) - BigInt(lastDigit)).toString();
        return roundedNum.padStart(len, '0'); // Preserve leading zeros
    }
}

// Test cases
console.log(roundToNearestMultipleOf10("29"));  // Output: "30"
console.log(roundToNearestMultipleOf10("15"));  // Output: "10"
console.log(roundToNearestMultipleOf10("73"));  // Output: "70"
console.log(roundToNearestMultipleOf10("87"));  // Output: "90"
console.log(roundToNearestMultipleOf10("55"));  // Output: "50"
// Expected Output: Preserves leading zeros
