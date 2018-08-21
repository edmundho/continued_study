function insertNodeAtPosition(head, data, position) {
  let current = head;
  let newNode = new SinglyLinkedListNode(data);

  let index = 0;
  while (current) {
    var previous;
    if (index === position - 1) {
      previous = current;
    } else if (index === position) {
      previous.next = newNode;
      newNode.next = current;
      console.log(head);
      return head;
    }

    current = current.next;
    index++;
  }
}
