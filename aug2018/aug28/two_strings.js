function twoStrings(s1, s2) {
  let count = {};

  for (let i = 0; i < s1.length; i++) {
    let ch = s1[i];
    if (count[ch]) {
      count[ch]++;
    } else {
      count[ch] = 1;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    let ch = s2[j];

    if (count[ch]) return "YES";
  }

  return "NO";
}