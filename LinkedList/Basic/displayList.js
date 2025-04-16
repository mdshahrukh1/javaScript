// Display Linked List
// Difficulty: BasicAccuracy: 79.22%Submissions: 12K+Points: 1Average Time: 15m
// Given a singly linked list of integers. The task is to display the linked list.

// Example 1:

// Input:
// LinkedList: 1->2->3->4->5
// Output: 1 2 3 4 5


// Node class to create a new node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class to manage linked list operations
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the list
    append(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to return the linked list as a string
    getList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;//result.join(" ");
    }
}

// Example Usage
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.getList()); // Returns: "1 2 3 4 5"
