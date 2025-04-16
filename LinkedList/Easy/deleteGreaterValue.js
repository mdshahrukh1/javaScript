// Given a singly linked list, remove all nodes that have a node with a greater value anywhere to their right in the list. 
// Return the head of the modified linked list.

// Examples:

// Input:
// LinkedList = 12->15->10->11->5->6->2->3
// Output: 15->11->6->3

// Explanation: Since, 12, 10, 5 and 2 are the elements which have greater elements on the following nodes. So, after deleting them, 
// the linked list would like be 15, 11, 6, 3.
// Input:
// LinkedList = 10->20->30->40->50->60
// Output: 60

// Explanation: All the nodes except the last node has a greater value node on its right, 
// so all the nodes except the last node must be removed.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// /**
//  * Removes nodes that have a greater value node to their right.
//  * @param {ListNode} head - The head of the linked list.
//  * @returns {ListNode} - The modified linked list head.
//  */
function removeNodes(head) {
    if (!head) return null;
    
    // Step 1: Reverse the linked list
    let prev = null, current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    
    // Step 2: Traverse the reversed list and remove smaller nodes
    let maxSoFar = head.val;
    current = head;
    let dummy = new ListNode(0, head);
    let temp = dummy;
    
    while (current) {
        if (current.val >= maxSoFar) {
            maxSoFar = current.val;
            temp.next = current;
            temp = current;
        }
        current = current.next;
    }
    temp.next = null;
    
    // Step 3: Reverse the list back to its original order
    prev = null;
    current = dummy.next;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}

// /**
//  * Utility function to print the linked list.
//  * @param {ListNode} head - The head of the linked list.
//  */
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join('->'));
}

// Example usage
// Constructing the linked list: 12->15->10->11->5->6->2->3
let head = new ListNode(12, new ListNode(15, new ListNode(10, new ListNode(11, new ListNode(5, new ListNode(6, new ListNode(2, new ListNode(3))))))));

console.log("Original List:");
printList(head);

let newHead = removeNodes(head);
console.log("Modified List:");
printList(newHead);
