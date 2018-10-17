var isAnagram = function (s, t) {
  const firstCount = {};
  const secondCount = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (firstCount[letter]) {
      firstCount[letter]++;
    } else {
      firstCount[letter] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    const letter = t[j];

    if (secondCount[letter]) {
      secondCount[letter]++;
    } else {
      secondCount[letter] = 1;
    }
  }

  for (let k = 0; k < alphabet.length; k++) {
    const alpha = alphabet[k];

    if (firstCount[alpha] !== secondCount[alpha]) {
      return false;
    }
  }

  return true;
};