function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesLanded = 0;
  let orangesLanded = 0;

  for (let i = 0; i < apples.length; i++) {
    const applePos = apples[i] + a;
    if (applePos >= s && applePos <= t) applesLanded++;
  }

  for (let j = 0; j < oranges.length; j++) {
    const orangePos = oranges[j] + b;
    if (orangePos >= s && orangePos <= t) orangesLanded++;
  }

  console.log(applesLanded);
  console.log(orangesLanded);
}