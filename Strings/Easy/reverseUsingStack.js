// You are given a string S, the task is to reverse the string using stack.

// Example 1:

// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG
// Example 2:

// Input: S="Geek"
// Output: keeG



function reverseStringUsingStack(S) {
    let stack = [];

    // Push characters of string to stack
    for (let char of S) {
        stack.push(char);
    }

    let reversedString = '';

    // Pop characters from stack to reverse the string
    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Example usage
console.log(reverseStringUsingStack("GeeksforGeeks")); // Output: skeeGrofskeeG
console.log(reverseStringUsingStack("Geek")); // Output: keeG
