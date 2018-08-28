function reversePrint(head) {
  let array = [];
  let current = head;

  while (current) {
    array.push(current);

    current = current.next;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i].data);
  }
}