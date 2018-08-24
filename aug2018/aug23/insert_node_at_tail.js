function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);

  if (head === null) {
    head = newNode;
    return head;
  }

  let current = head;

  while (current) {
    if (current.next === null) {
      current.next = newNode;
      return head;
    }

    current = current.next;
  }
}