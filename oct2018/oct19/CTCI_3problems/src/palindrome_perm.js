function palindromePerm (string) {
  const counts = {};

  for (let i = 0; i < string.length; i++) {
    const ch = string[i].toLowerCase();

    if (ch === " ") {
      continue;
    } else if (counts[ch]) {
      counts[ch]++;
    } else {
      counts[ch] = 1;
    }
  }

  const frequencies = Object.values(counts);
  let oddFreqs = 0;
  
  for (let i = 0; i < frequencies.length; i++) {
    const freq = frequencies[i];

    if (freq % 2 !== 0) {
      oddFreqs++;
    }

    if (oddFreqs > 1) return false;
  }

  return true;
}