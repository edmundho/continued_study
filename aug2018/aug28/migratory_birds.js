function migratoryBirds(arr) {
  let counter = {};

  for (let i = 0; i < arr.length; i++) {
    let bird = arr[i];

    if (counter[bird]) {
      counter[bird]++;
    } else {
      counter[bird] = 1;
    }
  }

  let max = 0;
  let mostCommon = "";

  for (let j = 0; j < arr.length; j++) {
    let bird = arr[j];

    if (counter[bird] > max) {
      max = counter[bird];
      mostCommon = bird;
    } else if (counter[bird] === max) {
      mostCommon = bird < mostCommon ? bird : mostCommon;
    }
  }

  return mostCommon;
}