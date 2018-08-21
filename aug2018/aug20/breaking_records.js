function breakingRecords(scores) {
  let lowestScore = scores[0];
  let highestScore = scores[0];

  let [timesHigher, timesLower] = [0, 0];

  scores.forEach(score => {
    if (score > highestScore) {
      highestScore = score;
      timesHigher++;
    }
    if (score < lowestScore) {
      lowestScore = score;
      timesLower++;
    }
  });

  return [timesHigher, timesLower];
}
