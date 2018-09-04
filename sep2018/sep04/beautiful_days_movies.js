function beautifulDays(i, j, k) {

  let numDays = 0;

  for (let num = i; num <= j; num++) {
    let reverse = parseInt(num.toString().split('').reverse().join(''));

    if ((num - reverse) % k === 0) numDays++;
  }

  return numDays;
}