// Stack using Linked List
// Difficulty: EasyAccuracy: 53.98%Submissions: 173K+Points: 2Average Time: 40m
// Let's give it a try! You have a linked list and must implement the functionalities push and pop of stack using this given linked list. 
// Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack. 
// The push() method takes one argument, an integer 'x' to be pushed into the stack and pop() 
// which returns an integer present at the top and popped out from the stack. 
// If the stack is empty then return -1 from the pop() method.
// Note: The input is given in the form of queries. Since there are two operations push() and pop(), 
// there is two types of queries as described below:
// (i) 1   (a query of this type takes x as another parameter and pushes it into the stack)
// (ii) 2  (a query of this type means to pop an element from the stack and return the popped element)
// Input is separated by space and as described above. 

// Examples :

// Input: [[1,2], [1,3], [2], [1,4], [2]]
// Output: [3, 4]
// Explanation: 
// push(2)  : the stack will be {2}
// push(3)  : the stack will be {2 3}
// pop()    : poped element will be 3,the stack will be {2}
// push(4)  : the stack will be {2 4}
// pop()    : poped element will be 4


class StackNode {
    constructor(a) {
        this.data = a;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
    }

    // Function to push an integer into the stack.
    push(a) {
        let newNode = new StackNode(a);
        newNode.next = this.top;
        this.top = newNode;
    }

    // Function to remove an item from top of the stack.
    pop() {
        if (this.top === null) {
            return -1;
        }
        let poppedData = this.top.data;
        this.top = this.top.next;
        return poppedData;
    }

    // Function to check if the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // Function to peek at the top element without popping it
    peek() {
        if (this.top === null) {
            return -1;
        }
        return this.top.data;
    }

    // Function to print the stack elements
    printStack() {
        let temp = this.top;
        let result = [];
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log("Stack:", result.join(" -> "));
    }
}

// Example usage
let stack = new MyStack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: -1
stack.push(5);
stack.push(6);
console.log(stack.peek()); // Output: 6
stack.printStack(); // Output: Stack: 6 -> 5
