// Identical Linked Lists
// Difficulty: BasicAccuracy: 47.49%Submissions: 167K+Points: 1Average Time: 20m
// Given the two singly Linked Lists respectively. The task is to check whether two linked lists are identical or not. 
// Two Linked Lists are identical when they have the same data and with the same arrangement too. 
// If both Linked Lists are identical then return true otherwise return false. 

// Examples:

// Input: LinkedList1: 1->2->3->4->5->6, LinkedList2: 99->59->42->20
// Output: false
// Explanation:

// As shown in figure linkedlists are not identical.
// Input: LinkedList1: 1->2->3->4->5, LinkedList2: 1->2->3->4->5
// Output: true
// Explanation: 
 
// As shown in figure both are identical.


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function areIdentical(head1, head2) {
    while (head1 !== null && head2 !== null) {
        if (head1.val !== head2.val) {
            return false; // Mismatch found
        }
        head1 = head1.next;
        head2 = head2.next;
    }

    // If both lists end at the same time, they are identical
    return head1 === null && head2 === null;
}

// Example usage:
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);

console.log(areIdentical(list1, list2)); // Output: true

let list3 = new ListNode(99);
list3.next = new ListNode(59);
list3.next.next = new ListNode(42);
list3.next.next.next = new ListNode(20);

console.log(areIdentical(list1, list3)); // Output: false

