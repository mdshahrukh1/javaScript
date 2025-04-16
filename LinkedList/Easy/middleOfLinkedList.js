// Middle of a Linked List
// Difficulty: EasyAccuracy: 57.93%Submissions: 363K+Points: 2Average Time: 20m
// Given the head of a linked list, the task is to find the middle. For example,
// the middle of 1-> 2->3->4->5 is 3. If there are two middle nodes (even count), return the second middle.
// For example, middle of 1->2->3->4->5->6 is 4.

// Examples:

// Input: Linked list: 1->2->3->4->5
// Output: 3

// Explanation: The given linked list is 1->2->3->4->5 and its middle is 3.
// Input: Linked list: 2->4->6->7->5->1
// Output: 7 

// Explanation: The given linked list is 2->4->6->7->5->1 and its middle is 7.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)





// class Solution {
//     /* Should return data of middle node. If linked list is empty, then return -1 */
//     getMiddle(node) {
//         if (node === null) return -1; // Handle empty list

//         let slow = node;
//         let fast = node;

//         while (fast !== null && fast.next !== null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.data;
//     }
// }

// Node class for a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to manage nodes
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node at the end
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Display the linked list
    printList() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += current.data + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}

// Solution class to find the middle node
class Solution {
    /* Should return data of middle node. If linked list is empty, then return -1 */
    getMiddle(node) {
        if (node === null) return -1; // Handle empty list

        let slow = node;
        let fast = node;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
}

// Test the linked list
let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5); // Linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null

ll.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> null

let solution = new Solution();
console.log("Middle Node Data:", solution.getMiddle(ll.head)); // Output: Middle Node Data: 3
