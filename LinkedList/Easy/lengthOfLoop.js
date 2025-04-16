// Given the head of a linked list, determine whether the list contains a loop. If a loop is present, return the number of nodes in the loop, otherwise return 0.



// Note: 'c' is the position of the node which is the next pointer of the last node of the linkedlist. If c is 0, then there is no loop.

// Examples:

// Input: LinkedList: 25->14->19->33->10->21->39->90->58->45, c = 4
// Output: 7
// Explanation: The loop is from 33 to 45. So length of loop is 33->10->21->39-> 90->58->45 = 7. 
// The number 33 is connected to the last node of the linkedlist to form the loop because according to the input the 4th node from the beginning(1 based indexing) 
// will be connected to the last node for the loop.
 
// Input: LinkedList: 5->4, c = 0
// Output: 0
// Explanation: There is no loop.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function countLoopNodes(head, arr = [], c = 0) {
    let slow = head, fast = head, loopNode = null;
    
    // Detect loop using Floyd’s Cycle Detection Algorithm
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) { // Loop detected
            let count = 1;
            let temp = slow;
            while (temp.next !== slow) {
                count++;
                temp = temp.next;
            }
            return count;
        }
    }
    return 0; // No loop
}

// Helper function to create a linked list from an array and loop at position 'c'
function createLinkedList(arr, c) {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0]);
    let temp = head;
    let loopNode = null;
    
    for (let i = 1; i < arr.length; i++) {
        temp.next = new ListNode(arr[i]);
        temp = temp.next;
        if (i === c - 1) {
            loopNode = temp;
        }
    }
    
    if (c > 0) {
        temp.next = loopNode; // Create loop
    }
    
    return head;
}

// Example Usage
let head1 = createLinkedList([25,14,19,33,10,21,39,90,58,45], 4);
console.log(countLoopNodes(head1)); // Output: 7

let head2 = createLinkedList([5,4], 0);
console.log(countLoopNodes(head2)); // Output: 0
