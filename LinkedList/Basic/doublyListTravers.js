// Given a doubly linked list of n elements. The task is to return the doubly linked list as an array.

// Note: The driver code will print the list forward and backward.

// Examples:

// Input: LinkedList: 1<->2<->3<->4<->5
// Output:
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
// Explanation: After traversing forward the linked list will look like [1, 2, 3, 4, 5] and from backward will [5, 4, 3, 2, 1].


class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Function to append a node at the end
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Function to convert the linked list to an array
    toArray() {
        let forwardArray = [];
        let backwardArray = [];
        let current = this.head;

        // Traverse forward
        while (current) {
            forwardArray.push(current.data);
            current = current.next;
        }

        // Traverse backward from the tail
        current = this.tail;
        while (current) {
            backwardArray.push(current.data);
            current = current.prev;
        }

        return [forwardArray, backwardArray];
    }
}

// Example usage:
let dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);

let [forward, backward] = dll.toArray();
console.log(forward);  // Output: [1, 2, 3, 4, 5]
console.log(backward); // Output: [5, 4, 3, 2, 1]
