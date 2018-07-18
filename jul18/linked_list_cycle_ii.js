// Given a linked list, return the node where the cycle begins.If there is no cycle, return null.

//   Note: Do not modify the linked list.

// Follow up:
// Can you solve it without using extra space ?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const detectCycle = function (head) {
  let scout1;
  if (head === null || head.next === null) { return null; }

  if (head.next) {
    if (head.next.next) {
      scout1 = head.next.next;
    }
  } 
  
  let current = head;
  while (current && scout1) {
    if (current === scout1) {
      let newCurrent = head;
      while (current !== newCurrent) {
        current = current.next;
        newCurrent = newCurrent.next;
      }
      return newCurrent;
    }
    
    scout1 = scout1.next.next;
    current = current.next;
  }
  
  return null;
};

