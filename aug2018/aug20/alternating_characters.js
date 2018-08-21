function alternatingCharacters(s) {
  let newString = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      newString += s[i];
    }
  }

  return s.length - newString.length;
}