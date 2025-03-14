function check(s) {
    let stack = [];
    let n = s.length;

    for (i = 0; i < n; i++) {
        let ch = s.charAt(i);
        if (ch == '(' || ch == '[' || ch == '{') { //If opening bracket -> push
            stack.push(ch);
        }
        else { //closig bracket
            if (stack.length == 0) {
                return false;
            }
            let peek = stack[stack.length - 1];
            if (ch == ')' && peek == '(' || ch == ']' && peek == '[' || ch == '}' && peek == '{') {
                stack.pop();
            }
        }
    }
    //After itration stack should be empty
    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

let s = "{[]()[]}";
console.log(check(s));