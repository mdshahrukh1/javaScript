// Print Linked List
// Difficulty: BasicAccuracy: 60.71%Submissions: 141K+Points: 1
// Given a linked list. Print all the elements of the linked list separated by space followed.

// Examples:

// Input: LinkedList : 1 -> 2

// Output: 1 2
// Explanation: The linked list contains two elements 1 and 2.The elements are printed in a single line.
// Input: Linked List : 49 -> 10 -> 30
 
// Output: 49 10 30
// Explanation: The linked list contains 3 elements 49, 10 and 30. The elements are printed in a single line.
// Constraints :1 <= n






// Node class representing each element in the linked list
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Function to print the linked list in a single row (space-separated)
function printList(head) {
    let curr = head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val); // Store values in an array
        curr = curr.next;
    }

    console.log(result.join(" ")); // Print space-separated values
}

// Function to find the length of the linked list
function getLength(head) {
    let count = 0;
    let curr = head;

    while (curr !== null) {
        count++;
        curr = curr.next;
    }

    return count;
}

// Example usage: Creating a linked list 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Printing the linked list in a single row
printList(head); // Output: 1 2 3 4 5

// Finding and printing the length of the linked list
console.log("Length of Linked List:", getLength(head)); // Output: Length of Linked List: 5
