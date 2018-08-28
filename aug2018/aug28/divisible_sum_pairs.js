function divisibleSumPairs(n, k, ar) {
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    let firstEl = ar[i];

    for (let j = i + 1; j < n; j++) {
      let secondEl = ar[j];

      if ((firstEl + secondEl) % k === 0) pairs++;
    }

  }

  return pairs;
}