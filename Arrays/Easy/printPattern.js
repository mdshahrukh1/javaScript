// Print a sequence of numbers starting with n, without using a loop. Replace n with n - 5, n−5... until n≤0. Then, replace n with n+5, n + 5, n+5 until n regains its initial value. Complete the function pattern(n) which takes n as input and returns a list containing the pattern.

// Examples

// Input: n = 16
// Output: 16 11 6 1 -4 1 6 11 16
// Explanation: The value decreases until it is greater than 0. After that it increases and stops when it becomes 16 again.
// Input: n = 10
// Output: 10 5 0 5 10
// Explanation: It follows the same logic as per the above example.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

function pattern(n) {
    let result = [];
    
    function generatePattern(current, decreasing) {
        result.push(current);
        
        if (current <= 0) {
            decreasing = false;
        }
        
        if (!decreasing && current === n) {
            return;
        }
        
        generatePattern(decreasing ? current - 5 : current + 5, decreasing);
    }
    
    generatePattern(n, true);
    return result;
}

// Example usage
console.log(pattern(16)); // [16, 11, 6, 1, -4, 1, 6, 11, 16]
console.log(pattern(10)); // [10, 5, 0, 5, 10]
