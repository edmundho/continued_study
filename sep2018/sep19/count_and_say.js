var countAndSay = function (n) {
  let sequence = ["1"];
  if (n === 1) return "1";

  while (sequence.length < n) {
    let curr = sequence[sequence.length - 1].toString();

    let counting = curr[0];
    let newElement = "";
    let count = 0;
    for (let i = 0; i <= curr.length; i++) {
      if (curr[i] !== counting) {
        newElement += `${count}${counting}`;
        counting = curr[i];
        count = 1;
      } else {
        count++;
      }
      console.log(count);
    }
    sequence.push(newElement);
  }

  return sequence;
};


// console.log(countAndSay(4));
console.log(countAndSay(7));