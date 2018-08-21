function getTotalX(a, b) {
  const sortedA = a.sort((x, y) => x - y);
  const sortedB = b.sort((x, y) => x - y);

  const largestInA = sortedA[sortedA.length - 1];
  const smallestInB = sortedB[0];

  let numsBetween = 0;

  for (let i = largestInA; i <= smallestInB; i++) {
    const factorsInA = sortedA.every(el => i % el === 0);
    const factorsOfB = sortedB.every(el => el % i === 0);

    if (factorsInA && factorsOfB) numsBetween++;
  }

  return numsBetween;
}
