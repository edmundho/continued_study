function birthdayCakeCandles(ar) {
  let tallestToShortest = ar.sort((a, b) => a - b).reverse();

  let count = 0;

  for (let i = 0; i < tallestToShortest.length; i++) {
    if (tallestToShortest[i] !== tallestToShortest[0]) break;
    count++;
  }

  return count;
}