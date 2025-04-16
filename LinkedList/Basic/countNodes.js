// Given a singly linked list. The task is to find the length of the linked list, 
// where length is defined as the number of nodes in the linked list.

// Examples :

// Input: LinkedList : 1->2->3->4->5

// Output: 5
// Explanation: Count of nodes in the linked list is 5, which is its length.


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getLength(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(getLength(head)); // Output: 5
