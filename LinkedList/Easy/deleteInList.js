// Given a singly linked list and an integer, x. Delete the xth node (1-based indexing) from the singly linked list.

// Examples:

// Input: Linked list: 1 -> 3 -> 4, x = 3
// Output: 1 -> 3

// Explanation: After deleting the node at the 3rd position (1-base indexing), the linked list is as 1 -> 3. 
// Input: Linked list: 1 -> 5 -> 2 -> 9, x = 2 
// Output: 1 -> 2 -> 9
// Explanation: After deleting the node at 2nd position (1-based indexing), the linked list is as 1 -> 2 -> 9.


class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteXthNode(head, x) {
    if (!head) return null; // If the list is empty
    
    if (x === 1) return head.next; // If the head needs to be removed
    
    let current = head;
    let prev = null;
    let count = 1;
  
    while (current && count < x) {
      prev = current;
      current = current.next;
      count++;
    }
  
    if (current) {
      prev.next = current.next;
    }
    
    return head;
  }
  
  // Helper function to print linked list
  function printList(head) {
    let result = [];
    let current = head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
  
  // Example usage
  let head = new ListNode(1);
  head.next = new ListNode(5);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(9);
  
  console.log("Original List:");
  printList(head);
  
  head = deleteXthNode(head, 2);
  
  console.log("After Deleting 2nd Node:");
  printList(head);
  