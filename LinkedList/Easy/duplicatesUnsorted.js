// Remove duplicates from an unsorted linked list
// Difficulty: EasyAccuracy: 45.95%Submissions: 242K+Points: 2Average Time: 20m
// Given an unsorted linked list. The task is to remove duplicate elements from this unsorted Linked List. When a value appears in multiple nodes, the node which appeared first should be kept, all other duplicates are to be removed.

// Examples:

// Input: LinkedList: 5->2->2->4
// Output: 5->2->4
// Explanation: Given linked list elements are 5->2->2->4, in which 2 is repeated only. So, we will delete the extra repeated elements 2 from the linked list and the resultant linked list will contain 5->2->4
 
// Input: LinkedList: 2->2->2->2->2
// Output: 2
// Explanation:Given linked list elements are 2->2->2->2->2, in which 2 is repeated. So, we will delete the extra repeated elements 2 from the linked list and the resultant linked list will contain only 2.
// Expected Time Complexity: O(n)
// Expected Space Complexity: O(n)


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function removeDuplicatesUnsorted(head) {
    if (!head) return null;

    let seen = new Set(); // Store unique values
    let current = head;
    seen.add(current.val); // Add first node's value

    while (current.next) {
        if (seen.has(current.next.val)) {
            current.next = current.next.next; // Skip duplicate
        } else {
            seen.add(current.next.val); // Add new unique value
            current = current.next;
        }
    }

    return head;
}

// Helper function to create linked list from array
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

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example Usage
let head = createLinkedList([5, 2, 2, 4]);

console.log("Before removing duplicates:");
printList(head);

head = removeDuplicatesUnsorted(head);

console.log("After removing duplicates:");
printList(head);
