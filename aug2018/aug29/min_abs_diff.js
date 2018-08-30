function minimumAbsoluteDifference(arr) {
  let minDiff = 1 / 0;

  let sorted = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
  });

  for (let i = 0; i < sorted.length - 1; i++) {
    let current = sorted[i];
    let diff = Math.abs(current - sorted[i + 1]);

    if (diff === 0) return diff;
    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}