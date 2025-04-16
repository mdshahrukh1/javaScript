// Linked List Insertion At End
// Difficulty: BasicAccuracy: 43.96%Submissions: 317K+Points: 1Average Time: 20m
// Given the head of a Singly Linked List and a value x, 
// insert that value x at the end of the LinkedList and return the modified Linked List.

// Examples :

// Input: LinkedList: 1->2->3->4->5 , x = 6
// Output: 1->2->3->4->5->6
// Explanation: 

// We can see that 6 is inserted at the end of the linkedlist.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    insertAtEnd(head, data) {
        let newNode = new Node(data);

        // Case 1: If the linked list is empty, return new node as head
        if (head === null) {
            return newNode;
        }

        // Case 2: Traverse to the last node
        let curr = head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        // Insert at the end
        curr.next = newNode;
        return head; // Return the original head
    }
}

// Example Usage:
function printList(head) {
    let curr = head;
    let result = [];
    while (curr !== null) {
        result.push(curr.data);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
}

// Test the function
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

let solution = new Solution();
head = solution.insertAtEnd(head, 4); // Insert 4 at the end

printList(head); // Output: 1 -> 2 -> 3 -> 4
