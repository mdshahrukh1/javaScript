// Given the head, the head of a singly linked list, Returns true if the linked list is circular & false if it is not circular.

// A linked list is called circular if it is not NULL terminated and all nodes are connected in the form of a cycle. 

// Note: The linked list does not contain any inner loop.

// Examples:

// Input: 

// Output: true
// Explanation: As shown in figure the first and last node is connected, i.e. 5 --> 2
// Input: 
 
// Output: false
// Explanation: As shown in figure this is not a circular linked list.



class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isCircular(head) {
    if (!head) return false;
    
    let slow = head, fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow pointer by 1 step
        fast = fast.next.next;     // Move fast pointer by 2 steps
        
        if (slow === fast) {
            return true; // There is a cycle
        }
    }
    
    return false; // No cycle found
}

// Example Usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // Creating a cycle

console.log(isCircular(head)); // Output: true

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);

console.log(isCircular(head2)); // Output: false
