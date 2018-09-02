var numberOfArithmeticSlices = function (A) {
  let numSlices = 0;

  for (let i = 1; i < A.length - 1; i++) {
    let slice = [A[i - 1], A[i], A[i + 1]];

    const isArithmetic = slice[2] - slice[1] === slice[1] - slice[0];

    if (isArithmetic) {
      numSlices++;
      const diff = slice[1] - slice[0];

      for (let j = i + 2; j < A.length; j++) {
        const newEl = A[j];
        const lastEl = slice[slice.length - 1];

        if (newEl - lastEl === diff) {
          slice.push(newEl);
          numSlices++;
        } else {
          break;
        }
      }
    }
  }

  return numSlices;
};