// Given that two linked lists are sorted in increasing order, 
// create a new linked list representing the intersection of the two linked lists. 
// The new linked list should be made without changing the original lists.

// Note: The elements of the linked list are not necessarily distinct.

// Examples:

// Input: LinkedList1 = 1->2->3->4->6, LinkedList2 = 2->4->6->8
// Output: 2->4->6
// Explanation: For the given two linked list, 2, 4 and 6 are the elements in the intersection.

// Input: LinkedList1 = 10->20->40->50, LinkedList2 = 15->40
// Output: 40

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersection(head1, head2) {
    let dummy = new ListNode();
    let tail = dummy;
    
    while (head1 !== null && head2 !== null) {
        if (head1.val === head2.val) {
            tail.next = new ListNode(head1.val);
            tail = tail.next;
            head1 = head1.next;
            head2 = head2.next;
        } else if (head1.val < head2.val) {
            head1 = head1.next;
        } else {
            head2 = head2.next;
        }
    }
    
    return dummy.next;
}

// Helper function to print linked list
function printLinkedList(head) {
    if (!head) {
        console.log("No intersection");
        return;
    }
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' '));
}

// Example Usage
let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(6)))));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(8))));
let intersection = getIntersection(list1, list2);
printLinkedList(intersection); // Expected Output: 2 4 6
