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

  if (index >= this.length) return -1;

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

// ["MyLinkedList","addAtHead","addAtTail","addAtHead","addAtTail","addAtIndex","get","addAtTail","addAtTail","addAtHead","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtTail","addAtIndex","get","addAtHead","addAtHead","addAtTail","addAtHead","addAtIndex","deleteAtIndex","get","addAtTail","addAtTail","addAtHead","addAtIndex","deleteAtIndex","get","addAtHead","deleteAtIndex","addAtTail","addAtHead","addAtTail","addAtTail","addAtTail","get","addAtHead","deleteAtIndex","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","get","addAtIndex","addAtIndex","addAtTail","addAtTail","addAtTail","addAtHead","addAtHead","addAtHead","addAtTail","addAtIndex","addAtTail","addAtTail","get","addAtTail","addAtTail","addAtTail","addAtTail","addAtIndex","addAtIndex","get","get","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtIndex","get","addAtHead","addAtHead","get","get","deleteAtIndex","addAtHead","addAtIndex","addAtIndex","addAtIndex","get","deleteAtIndex","addAtIndex","addAtTail","addAtIndex","get","addAtTail","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","get","deleteAtIndex","addAtIndex","addAtIndex","addAtTail","addAtHead"]
// [[], [22], [46], [68], [12], [3, 62], [3], [10], [17], [54], [43], [83], [0], [11], [7], [8], [3, 10], [3], [9], [46], [63], [64], [1, 81], [10], [2], [36], [71], [38], [5, 82], [4], [19], [37], [2], [0], [83], [99], [77], [20], [18], [38], [5], [64], [21], [41], [75], [66], [12], [15, 90], [14, 3], [80], [4], [69], [26], [63], [14], [6], [10, 33], [84], [45], [5], [1], [64], [22], [64], [6, 74], [36, 49], [27], [39], [83], [11], [79], [40], [20, 42], [16], [55], [9], [21], [42], [23], [89], [44, 19], [19, 53], [27, 55], [16], [50], [25, 61], [11], [8, 25], [12], [88], [12], [28], [1], [76], [62], [98], [2], [20], [51, 52], [4, 81], [79], [9]]
