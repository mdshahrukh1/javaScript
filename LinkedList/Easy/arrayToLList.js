// Given an array of integer arr. Your task is to construct the linked list from arr & return the head of the linked list.

// Examples:

// Input: arr = [1, 2, 3, 4, 5]
// Output: LinkedList: 1->2->3->4->5
// Explanation: Linked list for the given array will be

// Input: arr = [2, 4, 6, 7, 5, 1, 0]
// Output: LinkedList: 2->4->6->7->5->1->0
// Explanation: Linked list for the given array will be

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
  
    let head = new ListNode(arr[0]);
    let current = head;
  
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
  
    return head;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join("->"));
  }
  
  // Example usage:
  let arr1 = [1, 2, 3, 4, 5];
  let linkedList1 = arrayToLinkedList(arr1);
  printLinkedList(linkedList1);
  
  let arr2 = [2, 4, 6, 7, 5, 1, 0];
  let linkedList2 = arrayToLinkedList(arr2);
  printLinkedList(linkedList2);
  