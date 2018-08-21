function sortedInsert(head, data) {
  let newNode = new DoublyLinkedListNode(data);
  let current = head;

  while (current) {
    if (data < current.data) {
      newNode.next = current;
      if (current.prev) {
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      } else if (!current.prev) {
        head = newNode;
      }
      return head;
    } else if (!current.next) {
      current.next = newNode;
      newNode.prev = current;
      return head;
    }
    current = current.next;
  }

  return head;
}