// Delete Head of Linked List
// Difficulty: EasyAccuracy: 74.78%Submissions: 9K+Points: 2Average Time: 15m
// Given a linked list of size n, you have to delete the head of the linked list and return the new head.
// Note: Please also set the next of the original head to null.

// Example 1:

// Input:
// LinkedList: 1->2
// Output: 2
// Example 2:

// Input:
// LinkedList: 2->5->7->8->99->100
// Output: 5 7 8 99 100
// Your Task:
// The task is to complete the function deleteHead() which takes head referenceand returns reference to the new head node,
// which is then used to display the list. The printing is done automatically by the driver code.

// Expected Time Complexity: O(1).
// Expected Auxiliary Space: O(1).


class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function deleteHead(head) {
    if (!head) return null; // If the list is empty, return null

    let newHead = head.next; // Store the new head
    head.next = null; // Set original head's next to null to avoid memory leaks

    return newHead; // Return the new head
}

// Helper function to print the linked list
function printList(head) {
    let temp = head;
    let result = [];
    while (temp) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" "));
}

// Example usage
let head = new Node(2);
head.next = new Node(5);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(99);
head.next.next.next.next.next = new Node(100);

console.log("Original Linked List:");
printList(head);

head = deleteHead(head);

console.log("After deleting head:");
printList(head);
