// Node at a given index in linked list
// Given the head of a Singly Linked List and an index, The task is to find the node at the given index(1-based index) of the linked list. If no such index exists then return -1.

// Examples :

// Input: LinkedList: 1->2->3->4->5->6->7 , index = 3

// Output: 3
// Explanation: The Node value at index 3 is 3.
// Input: LinkedList: 19->28->37->46->55 , index = 6

// Output: -1
// Explanation: As number of nodes are less than k so there is no node at index 6 , therefore our answer is -1.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)


/* LINKED LIST NODE */
class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  class Solution {
    GetNth(head, index) {
      let current = head;
      let count = 1; // 1-based index
  
      while (current !== null) {
        if (count === index) {
          return current.data;
        }
        current = current.next;
        count++;
      }
  
      return -1; // If index is out of bounds
    }
  }
  
  // Example Usage:
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  
  const solution = new Solution();
  console.log(solution.GetNth(head, 3)); // Output: 3
  console.log(solution.GetNth(head, 6)); // Output: 6
  console.log(solution.GetNth(head, 8)); // Output: -1
  