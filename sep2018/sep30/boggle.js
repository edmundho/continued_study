function arithmeticBoggle(magicNumber, numbers) {

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];

    if (Math.abs(sum + current) > magicNumber) {
      sum = Math.abs(sum - current);
    } else if (Math.abs(sum + current) <= magicNumber) {
      sum = Math.abs(sum + current);
    }
  }

  if (sum === magicNumber) {
    return true;
  } else {
    return false;
  }
}

// console.log(arithmeticBoggle(10, [1, 2])); // = false //.There's no way to add or subtract 1 and 2 to get 10.
// console.log(arithmeticBoggle(2, [1, 2, 3, 4])); // = true //. 1 + 2 + 3 - 4 = 2.
// console.log(arithmeticBoggle(0, [])); // = true
// console.log(arithmeticBoggle(1, [])); // = false
// console.log(arithmeticBoggle(1, [1])); // = true
// console.log(arithmeticBoggle(0, [1])); // = false

console.log(arithmeticBoggle(-42, [1, 13, 57, 17, 19, 35]));
