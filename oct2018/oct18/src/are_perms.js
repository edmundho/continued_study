function arePerms (str1, str2) {
  if (str1.length !== str2.length) return false;
  const counts1 = {};
  const counts2 = {};

  for (let i = 0; i < str1.length; i++) {
    const letter1 = str1[i];
    const letter2 = str2[i];

    if (counts1[letter1]) {
      counts1[letter1]++;
    } else {
      counts1[letter1] = 1;
    }

    if (counts2[letter2]) {
      counts2[letter2]++;
    } else {
      counts2[letter2] = 1;
    }
  }

  const lettersIn1 = Object.keys(counts1);

  for (let j = 0; j < lettersIn1.length; j++) {
    const letter = lettersIn1[j];

    if (counts1[letter] !== counts2[letter]) return false;
  }

  return true;
}