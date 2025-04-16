// Given the head of a Singly Linked List and a number k, the task is to find the modular node of the linked list. If no such index is present return -1.

// A modular node is defined as the last node in the linked list whose index is divisible by k (i%k==0). 

// Note: 1-based indexing is followed

// Examples :

// Input: LinkedList: 1->2->3->4->5->6->7 , k = 3
 
// Output: 6
// Explanation: Indexing of the linked list is same as the values of the Node. The maximum index which is divisble by 3 is 6 and the
// node value of the 6th index is 6.
// Input: LinkedList: 19->28->37->46->55 , k = 13

// Output: -1
// Explanation: Index start from 1 and end at 5. There is no index which can divisible by 13, so output is -1.
// Constr



class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findModularNode(head, k) {
    if (!head || k <= 0) return -1;
    
    let index = 0;
    let modularNode = null;
    let current = head;
    
    while (current) {
        index++;
        if (index % k === 0) {
            modularNode = current;
        }
        current = current.next;
    }
    
    return modularNode ? modularNode.value : -1;
}

// Example usage:
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

let head = createLinkedList([1, 2, 3, 4, 5, 6, 7]);
console.log(findModularNode(head, 2)); // Output: 6

head = createLinkedList([19, 28, 37, 46, 55]);
console.log(findModularNode(head, 13)); // Output: -1
