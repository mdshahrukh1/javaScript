// Remove Duplicates from a Sorted Linked List
// Difficulty: EasyAccuracy: 49.37%Submissions: 305K+Points: 2Average Time: 20m
// Given a singly linked list. The task is to remove duplicates (nodes with duplicate values) from the given list (if it exists).
// Note: Try not to use extra space. The nodes are arranged in a sorted way.

// Examples:

// Input:
// LinkedList: 2->2->4->5
// Output: 2 -> 4 -> 5

// Explanation: In the given linked list 2 -> 2 -> 4 -> 5, only 2 occurs more than 1 time. So we need to remove it once.
// Input:
// LinkedList: 2->2->2->2->2
// Output: 2

// Explanation: In the given linked list  2 -> 2 -> 2 -> 2, 2 is the only element and is repeated 5 times. So we need to remove any four 2.
// Expected Time Complexity : O(n)
// Expected Space Complexity: O(1)


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function removeDuplicates(head) {
    if (!head) return head; // If list is empty, return null
    
    let current = head;
    
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Skip duplicate node
        } else {
            current = current.next; // Move to the next node
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
let head = createLinkedList([2, 2, 4, 5]);

console.log("Before removing duplicates:");
printList(head);

head = removeDuplicates(head);

console.log("After removing duplicates:");
printList(head);
