function stringCompression (string) {
  let answer = "";
  let count = 1;

  let ch;
  for (let i = 1; i < string.length; i++) {
    ch = string[i];
    const prev = string[i - 1];

    if (ch === prev) {
      count++;
    } else {
      answer += `${prev}${count}`;
      count = 1;
    }

    if (answer.length > string.length) {
      return string;
    }

    console.log(answer);
  }

  answer += `${ch}${count}`;
  return answer;
}

// console.log(stringCompression("aabcccccaaa"));
// console.log(stringCompression("aabccccca"));
// console.log(stringCompression("abcdefghhhhhhhhhhhhhiijkl"));
console.log(stringCompression("abcdeabcdef"));