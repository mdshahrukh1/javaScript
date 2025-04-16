// You are given a singly linked list of n elements, and also an element x. 
// You need to find if x is present in the linked list or not. Return true if x is present else returns false.
// (1 is printed by the driver code if the returned value is true, otherwise 0)

// Examples :

// Input: LinkedList: 1->2->3->4->5, x = 4
// Output: 1
// Input: LinkedList: 2->4->6->7->5->1->0, x = 10
// Output: 0
// Constraints:
// 1 <= n <= 100
// 1 <= x, value <= 103

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function searchInLinkedList(head, x) {
    let current = head;
    while (current !== null) {
        if (current.val === x) {
            return true;
        }
        current = current.next;
    }
    return false;
}

// Example Usage
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

let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(searchInLinkedList(head1, 4) ? 1 : 0); // Output: 1

let head2 = createLinkedList([2, 4, 6, 7, 5, 1, 0]);
console.log(searchInLinkedList(head2, 10) ? 1 : 0); // Output: 0
