function reverse(head) {
  if (head === null) return head;
  let current = head;

  while (current) {
    const originalNext = current.next;
    current.next = current.prev;
    current.prev = originalNext;

    if (originalNext === null) {
      head = current;
    }

    current = current.prev;
  }

  return head;
}