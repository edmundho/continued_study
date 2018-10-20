function urlify (string, length) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const ch = string[i];

    if (ch === " ") {
      result += "%20";
    } else {
      result += ch;
    }
  }

  return result;
}