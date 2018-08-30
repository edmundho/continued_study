function removeDuplicates(head) {
  let current = head;
  if (!current) return head;

  let previous = null;

  while (current) {

    if (previous && current.data === previous.data) {
      previous.next = current.next;
    } else {
      previous = current;
    }

    current = current.next;
  }

  return head;
}