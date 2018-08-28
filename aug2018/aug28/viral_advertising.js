function viralAdvertising(n) {
  let shared = 5;
  let timesLiked = 0;

  for (let i = 1; i <= n; i++) {
    let recipients = Math.floor(shared / 2);

    timesLiked += recipients;
    shared = recipients * 3;
  }

  return timesLiked;
}