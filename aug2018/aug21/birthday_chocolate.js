function birthday(s, d, m) {
  let numSegments = 0;

  for (let i = 0; i <= s.length - m; i++) {
    const segment = s.slice(i, i + m);

    const segmentSum = segment.reduce((acc, el) => acc + el);

    if (segmentSum === d) numSegments++;
  }

  return numSegments;
}