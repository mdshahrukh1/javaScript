// Join Two Linked Lists
// Difficulty: EasyAccuracy: 70.51%Submissions: 10K+Points: 2Average Time: 15m
// Given two linked lists of size n1 and n2 respectively, 
// you have to join the head of second list to the tail of first so that we can traverse both the lists using head of 1st list.

// Example 1:

// Input:
// LinkedList1: 5
// LinkedList2: 1->2
// Output: 5 1 2
// Example 2:

// Input:
// LinkedList1: 1->2->9->6->5->7
// LinkedList2: 99->8->4
// Output: 1 2 9 6 5 7 99 8 4
// Your Task:
// The task is to complete the function joinTheLists() which takes head1 and head2 references as arguments. 
// The function returns head of the first list after joining both lists. The printing is done automatically by the driver code.

// Expected Time Complexity: O(n1).
// Expected Auxiliary Space: O(1).




class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Function to join two linked lists
  function joinTheLists(head1, head2) {
    if (!head1) return head2; // If first list is empty, return second list
    if (!head2) return head1; // If second list is empty, return first list
  
    let current = head1;
    
    // Traverse to the end of the first linked list
    while (current.next) {
      current = current.next;
    }
  
    // Attach the second list to the last node of the first list
    current.next = head2;
  
    return head1; // Return head of the first list
  }
  
  // Function to create a linked list from an array
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
  
  // Function to print the linked list
  function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join("->"));
  }
  
  // Creating two linked lists
  let list1 = arrayToLinkedList([1, 2, 9, 6, 5, 7]);
  let list2 = arrayToLinkedList([99, 8, 4]);
  
  // Joining the lists
  let mergedList = joinTheLists(list1, list2);
  
  // Printing the merged linked list
  printLinkedList(mergedList);
  


//   function joinTheLists(head1, head2) {
//     if (!head1) return head2; // If first list is empty, return second list
//     if (!head2) return head1; // If second list is empty, return first list
  
//     let current = head1;
    
//     // Traverse to the end of the first linked list
//     while (current.next) {
//       current = current.next;
//     }
  
//     // Attach the second list to the last node of the first list
//     current.next = head2;
  
//     return head1; // Return head of the first list
//   }
  