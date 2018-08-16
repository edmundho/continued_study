function plusMinus(arr) {
  let negatives = 0;
  let positives = 0;
  let zeroes = 0;
  const length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negatives++;
    if (arr[i] > 0) positives++;
    if (arr[i] === 0) zeroes++;
  }

  console.log((positives / length).toFixed(6));
  console.log((negatives / length).toFixed(6));
  console.log((zeroes / length).toFixed(6));
}
