function getNode(head, positionFromTail) {
  let array = [];
  let current = head;

  while (current) {
    array.push(current);

    current = current.next;
  }

  let position = array.length - positionFromTail;
  return array[position - 1].data;
}