function reverseString() {
    let stack = [];
    //push  all chars of str to the stack
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        stack.push(char);
    }
    //pop the chars and store or concatenate it in a string
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        reverse += stack.pop(); // rev = reverse + pop()

    }
    return reverse;
}
    let str = "Hello";
    console.log(reverseString(str));