function equalStacks(h1, h2, h3) {

  let stacksArray = [h1, h2, h3];

  const firstTotal = stacksArray[0].reduce((acc, el) => acc + el);
  const secondTotal = stacksArray[1].reduce((acc, el) => acc + el);
  const thirdTotal = stacksArray[2].reduce((acc, el) => acc + el);

  let totalsArray = [firstTotal, secondTotal, thirdTotal];

  const stacksNotEmpty = stacksArray.some(stack => stack.length > 0);

  while (stacksNotEmpty) {
    if (totalsArray[0] === totalsArray[1] && totalsArray[0] === totalsArray[2]) {
      return totalsArray[0];
    }

    let maxTotal = 0; // index of max stack in stacksArray
    // iterate through array of stack totals: totalsArray
    for (let i = 1; i < totalsArray.length; i++) {
      let max = totalsArray[0];
      if (totalsArray[i] > max) {
        max = totalsArray[i];
        maxTotal = i;
      }
    }

    const removedEl = stacksArray[maxTotal].shift();
    totalsArray[maxTotal] -= removedEl;
  }

  return 0;
}