// Pairwise swap elements of a linked list
// Given a singly linked list. The task is to swap elements in the linked list pairwise. 
// For example, if the input list is 1 2 3 4, the resulting list after swaps will be 2 1 4 3.

// Note: You need to swap the nodes, not only the data. If only data is swapped then the driver code will print -1.

// Examples:

// Input: LinkedList: 1->2->2->4->5->6->7->8
// Output: 2->1->4->2->6->5->8->7

// Explanation: After swapping each pair considering (1,2), (2, 4), (5, 6).. so on as pairs,
//  we get 2, 1, 4, 2, 6, 5, 8, 7 as a new linked list.
// Input: LinkedList: 1->3->4->7->9->10->1
// Output: 3->1->7->4->10->9->1

// Explanation: After swapping each pair considering (1,3), (4, 7), (9, 10).. so on as pairs,
// we get 3, 1, 7, 4, 10, 9, 1 as a new linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    printList() {
        let temp = this.head;
        let result = [];
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }
}

class Solution {
    pairWiseSwap(node) {
        if (!node || !node.next) return node;
        
        let dummy = new Node(0);
        dummy.next = node;
        let prev = dummy;
        
        while (prev.next && prev.next.next) {
            let first = prev.next;
            let second = first.next;
            
            // Swapping nodes
            first.next = second.next;
            second.next = first;
            prev.next = second;
            
            // Move prev to the next pair
            prev = first;
        }
        
        return dummy.next;
    }
}

// Example Usage
let list = new LinkedList();
[1, 2, 2, 4, 5, 6, 7, 8].forEach(num => list.add(num));
console.log("Original List:");
list.printList();

let solution = new Solution();
list.head = solution.pairWiseSwap(list.head);

console.log("Swapped List:");
list.printList();
