// Insert in Middle of Linked List
// Difficulty: BasicAccuracy: 43.2%Submissions: 122K+Points: 1Average Time: 20m
// Given the head of a Singly Linked List and a value x. The task is to insert the key in the middle of the linked list.

// Examples :

// Input: LinkedList = 1->2->4 , x = 3
// Output: 1->2->3->4
// Explanation: 

// The new element is inserted after the current middle element in the linked list.
// Input: LinkedList = 10->20->40->50 , x = 30
// Output: 10->20->30->40->50
// Explanation: 

// The new element is inserted after the current middle element in the linked list and Hence, the output is 10->20->30->40->50.
// Expected Time Complexity: O(n)
// Expected Auxilliary Space: O(1)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    insertInMiddle(head, x) {
        if (!head) return new Node(x); // If list is empty, return new node as head

        let slow = head, fast = head, prev = null;

        // Finding the middle using slow and fast pointers
        while (fast !== null && fast.next !== null) {
            prev = slow; // Store previous node for even cases
            slow = slow.next;
            fast = fast.next.next;
        }

        let newNode = new Node(x);

        // If the number of nodes is even, insert after `prev`
        if (fast === null) {
            newNode.next = prev.next;
            prev.next = newNode;
        } 
        // If the number of nodes is odd, insert after `slow`
        else {
            newNode.next = slow.next;
            slow.next = newNode;
        }

        return head;
    }
}

// Function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" "));
}

// Example Usage

// Test Case 1: Odd Number of Nodes
let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);
console.log("Before Insertion:");
printList(head1);
let solution = new Solution();
head1 = solution.insertInMiddle(head1, 3);
console.log("After Insertion:");
printList(head1);
// Expected Output: 1 2 3 4

// Test Case 2: Even Number of Nodes
let head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(40);
head2.next.next.next = new Node(50);
console.log("\nBefore Insertion:");
printList(head2);
head2 = solution.insertInMiddle(head2, 30);
console.log("After Insertion:");
printList(head2);
// Expected Output: 10 20 30 40 50
