function printLinkedList(head) {
  if (head === null) return;

  let current = head;

  while (current) {
    console.log(current.data);

    current = current.next;
  }

}