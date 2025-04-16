// Given the head of a linked list, the task is to reverse this list and return the reversed head.

// Examples:

// Input: head: 1 -> 2 -> 3 -> 4 -> NULL
// Output: head: 4 -> 3 -> 2 -> 1 -> NULL
// Explanation:



class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
      let nextNode = current.next; // Store next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev forward
      current = nextNode; // Move current forward
    }
    
    return prev; // New head of the reversed list
  }
  
  // Example Usage:
  function printList(head) {
    let output = [];
    while (head !== null) {
      output.push(head.val);
      head = head.next;
    }
    console.log(output.join(" -> ") + " -> NULL");
  }
  
  // Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> NULL
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  
  console.log("Original List:");
  printList(head);
  
  head = reverseLinkedList(head);
  
  console.log("Reversed List:");
  printList(head);
  