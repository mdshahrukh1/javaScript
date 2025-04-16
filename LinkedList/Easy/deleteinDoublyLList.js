// Delete in a Doubly Linked List
// Difficulty: EasyAccuracy: 42.98%Submissions: 179K+Points: 2Average Time: 40m
// Given a Doubly Linked list and a position. The task is to delete a node from a given position (position starts from 1) in a doubly linked list and return the head of the doubly Linked list.

// Examples:

// Input: LinkedList = 1 <--> 3 <--> 4, x = 3
// Output: 1 <--> 3
// Explanation: After deleting the node at position 3 (position starts from 1),the linked list will be now as 1 <--> 3.
 
// Input: LinkedList = 1 <--> 5 <--> 2 <--> 9, x = 1
// Output: 5 <--> 2 <--> 9

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.prev = temp;
    }

    deleteNode(position) {
        if (!this.head || position < 1) return this.head;
        
        let temp = this.head;
        
        if (position === 1) {
            this.head = temp.next;
            if (this.head) {
                this.head.prev = null;
            }
            return this.head;
        }

        let count = 1;
        while (temp && count < position) {
            temp = temp.next;
            count++;
        }

        if (!temp) return this.head;

        if (temp.next) {
            temp.next.prev = temp.prev;
        }
        if (temp.prev) {
            temp.prev.next = temp.next;
        }

        return this.head;
    }

    printList() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(' <--> '));
    }
}

// Example Usage
let dll = new DoublyLinkedList();
dll.append(29);
dll.append(78);
console.log("Before Deletion:");
dll.printList();
dll.deleteNode(1);
console.log("After Deletion:");
dll.printList();
