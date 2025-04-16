// Kth from End of Linked List
// Difficulty: EasyAccuracy: 41.18%Submissions: 410K+Points: 2Average Time: 30m
// Given the head of a linked list and the number k, Your task is to find the kth node from the end. 
// If k is more than the number of nodes, then the output should be -1.

// Examples

// Input: LinkedList: 1->2->3->4->5->6->7->8->9, k = 2
// Output: 8
// Explanation: The given linked list is 1->2->3->4->5->6->7->8->9. The 2nd node from end is 8.

// Input: LinkedList: 10->5->100->5, k = 5
// Output: -1
// Explanation: The given linked list is 10->5->100->5. Since 'k' is more than the number of nodes, the output is -1.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Definition for a Node in a Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Definition for a Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add a new node at the end
    append(data) {
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

    // Function to get K-th node from last
    getKthFromLast(k) {
        if (!this.head) return -1; // If the list is empty

        let first = this.head, second = this.head;

        // Move 'first' k steps ahead
        for (let i = 0; i < k; i++) {
            if (!first) return -1; // If k is greater than the length of the list
            first = first.next;
        }

        // Move both pointers until 'first' reaches the end
        while (first) {
            first = first.next;
            second = second.next;
        }

        return second ? second.data : -1;
    }

    // Function to print the Linked List (for debugging)
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

// Example Usage
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5

console.log(list.getKthFromLast(2)); // Output: 4
console.log(list.getKthFromLast(5)); // Output: 1
console.log(list.getKthFromLast(6)); // Output: -1

// getKthFromLast(head, k) {
//         // code here
//         if(head.next == null){
//             return null;
//         }
        
//         let slow = head;
//         let fast = head;
        
//         for(let i = 1; i <= k; i++){
//             fast = fast.next;
//         }
//         if(fast == null){
//             head = head.next;
//             return head;
//         }
//         while(fast.next !== null){
//             slow = slow.next;
//             fast = fast.next;
//         }
//         slow.next = slow.next.next;
        
//         return fast ? fast.data : -1;
//     }