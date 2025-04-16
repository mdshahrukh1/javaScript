// Linked List Insertion At Beginning
// Difficulty: EasyAccuracy: 83.44%Submissions: 4K+Points: 2
// Given the head of a Singly Linked List and a value x,
// insert that value x at the beginning of the LinkedList and return the modified Linked List.

// Examples :

// Input: LinkedList: 1->2->3->4->5 , x = 6
// Output: 6->1->2->3->4->5
// Explanation: 

// We can see that 6 is inserted at the beginning of the linkedlist.
// Input: LinkedList: 5->4 , x = 1
// Output: 1->5->4
// Explanation: 

// We can see that 1 is inserted at the beginning of the linkedlist.
// Expected Time Complexity: O(1)
// Expected Auxiliary Space: O(1)

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(x) {
        let newNode = new ListNode(x);
        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        let temp = this.head;
        let result = "";
        while (temp !== null) {
            result += temp.value + "->";
            temp = temp.next;
        }
        console.log(result.slice(0, -2)); // Remove last "->"
    }
}

// Example Usage
let list = new LinkedList();
list.insertAtBeginning(5);
list.insertAtBeginning(4);
list.insertAtBeginning(1);
list.printList(); // Output: 1->4->5
