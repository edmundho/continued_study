function deleteNode(head, position) {
  let current = head;

  if (position === 0) {
    head = current.next;
    return head;
  }

  let index = 0;
  while (current) {
    if (index === position - 1) {
      current.next = current.next.next;
      return head;
    }

    index++;
    current = current.next;
  }
}
