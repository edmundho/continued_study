var plusOne = function (digits) {

  let lastIndex = digits.length - 1;
  let lastVal = digits[lastIndex];

  if (lastVal === 9) {
    let notNine = null;
    let addOne = false;
    let i = lastIndex;

    console.log(i);

    while (notNine === null && !addOne) {
      if (digits[i] !== 9) {
        notNine = i;
      } else if (i === 0) {
        addOne = true;
      }
      i--;
    }
    console.log(notNine);
    console.log(addOne);

    if (addOne) {

      digits.unshift(0);
      notNine = 0;
    }

    for (let j = notNine + 1; j < digits.length; j++) {
      digits[j] = 0;
    }
    digits[notNine] += 1;


  } else {
    digits[lastIndex] += 1;
  }

  return digits;
};

let one = [8, 9, 9, 9];

console.log(plusOne(one));