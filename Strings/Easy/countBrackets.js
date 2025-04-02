// Given a string str, the task is to find the bracket numbers, i.e., for each bracket in str, 
// return i if the bracket is the ith opening or closing bracket to appear in the string. 

//  Examples:

// Input:  str = "(aa(bdc))p(dee)"
// Output: 1 2 2 1 3 3
// Explanation: The highlighted brackets in
// the given string (aa(bdc))p(dee) are
// assigned the numbers as: 1 2 2 1 3 3.
// Input:  str = "(((()("
// Output: 1 2 3 4 4 5
// Explanation: The highlighted brackets in
// the given string (((()( are assigned
// the numbers as: 1 2 3 4 4 5
// Expected Time Complexity: O(|str|)
// Expected Auxiliary Space: O(|str|)


function findBracketNumbers(str) {
    let stack = [];
    let count = 0;
    let result = [];

    for (let char of str) {
        if (char === '(') {
            count++;
            stack.push(count);
            result.push(count);
        } else if (char === ')') {
            if (stack.length > 0) {
                result.push(stack.pop());
            }
        }
    }

    return result;
}

// Test Cases
console.log(findBracketNumbers("(aa(bdc))p(dee)"));  
// Expected Output: [1, 2, 2, 1, 3, 3]

console.log(findBracketNumbers("(((()("));  
// Expected Output: [1, 2, 3, 4, 4, 5]

console.log(findBracketNumbers("(d(())l()()m()(())(na(q)h)(c)qzk(fo(q()((((csba()"));  
// Expected Output: [1, 2, 3, 3, 2, 4, 4, 5, 5, 6, 6, 7, 8, 8, 7, 9, 10, 10, 9, 11, 11, 12, 13, 14, 14, 15, 16, 17, 18, 19, 19]
