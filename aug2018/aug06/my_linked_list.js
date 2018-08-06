/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

  let current = this.head;

  if (index > this.length) return -1;

  let i = 0;
  while (i < this.length) {
    if (i === index) {
      return current.val;
    }
    current = current.next;
    i++;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

  let newHead = { val: val };
  newHead.next = this.head;
  this.head = newHead;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let current = this.head;
  let newNode = { val: val };

  if (this.length === 0) {
    this.head = newNode;
    return;
  }

  while (current && current.next) {
    current = current.next;
  }

  current.next = newNode;
  this.length++;

  return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let current = this.head;
  let newNode = { val: val };

  if (index === this.length) {
    this.addAtTail(val);
  }
  if (index > this.length) {
    return;
  }

  let i = 0;
  let previous;
  while (current) {
    if (i === index - 1) {
      previous = current;
    }
    if (i === index) {
      previous.next = newNode;
      newNode.next = current;
      this.length++;
    }
    current = current.next;
    i++;
  }

  return this;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.head;

  if (index > this.length - 1) return -1;

  let i = 0;
  let previous;
  while (current) {
    if (i === index - 1) {
      previous = current;
    }
    if (i === index) {
      previous.next = current.next;
    }
    current = current.next;
    i++;
  }

  return this;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// const linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// console.log(linkedList.get(0));
// console.log(linkedList.get(1));
// // console.log(linkedList.get(2));
// // console.log(linkedList);
// linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
// // console.log(linkedList);
// console.log(linkedList.get(0));
// console.log(linkedList.get(1));            // returns 2
// console.log(linkedList.get(2));
// linkedList.deleteAtIndex(1);  // now the linked list is 1->3
// console.log(linkedList.get(1));            // returns 3
// console.log(linkedList);

// ["MyLinkedList","get","addAtIndex","get","get","addAtIndex","get","get"]
// [[], [0], [1, 2], [0], [1], [0, 1], [0], [1]]

const ll2 = new MyLinkedList();
console.log(ll2.get(0)); // should be null
console.log(ll2);
ll2.addAtIndex(1, 2); // should be null
ll2.get(0); // should be null
ll2.get(1); // should be null
ll2.addAtIndex(0, 1); // List is now 1
ll2.get(0);  // returns 1
ll2.get(1); // returns null
console.log(ll2);
