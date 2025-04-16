// Is Linked List Length Even?
// Difficulty: BasicAccuracy: 71.58%Submissions: 94K+Points: 1
// Given a linked list, your task is to complete the function isLengthEven() which contains the head of the linked list, and check whether the length of the linked list is even or not. Return true if it is even, otherwise false.

// Examples:

// Input: Linked list: 12->52->10->47->95->0

// Output: true
// Explanation: The length of the linked list is 6 which is even, hence returned true.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node at the end
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
}

// Function to check if the length of the linked list is even
function isLengthEven(head) {
    let count = 0;
    let current = head;
    
    while (current) {
        count++;
        current = current.next;
    }
    
    return count % 2 === 0;
}

// Example usage:
let list = new LinkedList();
list.append(12);
list.append(52);
list.append(10);
list.append(47);
list.append(95);
list.append(0);

console.log(isLengthEven(list.head)); // Output: true

let list2 = new LinkedList();
list2.append(9);
list2.append(4);
list2.append(3);

console.log(isLengthEven(list2.head)); // Output: false
