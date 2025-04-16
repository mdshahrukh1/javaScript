// Given a singly linked list, delete the middle of the linked list.

// Note:

// If there are even nodes, then there would be two middle nodes, we need to delete the second middle element.
// If the input linked list has a single node, then it should return NULL.
// Examples:

// Input: LinkedList: 1->2->3->4->5
// Output: 1->2->4->5
// Explanation:

// Input: LinkedList: 2->4->6->7->5->1
// Output: 2->4->6->5->1
// Explaination:

// Input: LinkedList: 7 
// Output: <empty linked list>
// Explanation: There was only one node and it was deleted.


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function deleteMiddle(head) {
    if (!head || !head.next) return null; // If only one node, return null

    let slow = head, fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Delete the middle node (slow)
    if (prev) {
        prev.next = slow.next;
    }

    return head;
}

// Helper function to print the linked list
function printList(head) {
    let curr = head;
    let result = [];
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join("->"));
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

head = deleteMiddle(head);

console.log("List after deleting middle:");
printList(head);
