// Given a doubly linked list. Your task is to reverse the doubly linked list and return its head.

// Examples:

// Input: LinkedList: 3 <-> 4 <-> 5
// Output: 5 <-> 4 <-> 3

// Input: LinkedList: 75 <-> 122 <-> 59 <-> 196
// Output: 196 <-> 59 <-> 122 <-> 75

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function reverseDoublyLinkedList(head) {
    if (!head) return null;
    
    let current = head;
    let temp = null;
    
    while (current !== null) {
        // Swap next and prev pointers
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        
        // Move to the previous node (which is next due to swapping)
        head = current;
        current = current.prev;
    }
    
    return head;
}

// Helper function to print the linked list
function printList(head) {
    let temp = head;
    let result = "";
    while (temp !== null) {
        result += temp.data + " <-> ";
        temp = temp.next;
    }
    console.log(result ? result.slice(0, -5) : "Empty List"); // Removing the last arrow
}

// Example usage
let head = new Node(3);
let second = new Node(4);
let third = new Node(5);
head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

console.log("Original List:");
printList(head);
head = reverseDoublyLinkedList(head);
console.log("Reversed List:");
printList(head);
