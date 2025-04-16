// Insert in a Sorted List
// Difficulty: EasyAccuracy: 31.37%Submissions: 136K+Points: 2Average Time: 20m
// Given a linked list sorted in ascending order and an integer called key, 
// insert data in the linked list such that the list remains sorted.

// Examples:

// Input: LinkedList: 25->36->47->58->69->80, key: 19
// Output: 19->25->36->47->58->69->80

// Explanation: After inserting 19 the sorted linked list will look like the one in the output.
// Input: LinkedList: 50->100, key: 75
// Output: 50->75->100

// Explanation: After inserting 75 the sorted linked list will look like the one in the output.


class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertSorted(head, key) {
    let newNode = new ListNode(key);
    // If the list is empty or the new key is smaller than the head
    if (!head || head.value >= key) {
        newNode.next = head;
        return newNode;
    }
    
    let current = head;
    while (current.next && current.next.value < key) {
        current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    return head;
}

function printList(head) {
    let output = "";
    let current = head;
    while (current) {
        output += current.value + (current.next ? "->" : "");
        current = current.next;
    }
    console.log(output);
}

// Example usage
let head = null;
head = insertSorted(head, 25);
head = insertSorted(head, 36);
head = insertSorted(head, 47);
head = insertSorted(head, 58);
head = insertSorted(head, 69);
head = insertSorted(head, 80);
head = insertSorted(head, 19); // Insert 19 into the sorted list
printList(head); // Output: 19->25->36->47->58->69->80

let head2 = null;
head2 = insertSorted(head2, 50);
head2 = insertSorted(head2, 100);
head2 = insertSorted(head2, 75); // Insert 75 into the sorted list
printList(head2); // Output: 50->75->100
