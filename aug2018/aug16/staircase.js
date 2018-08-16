function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let numSpaces = n - i;
    let numHashtags = i;
    let stringOutput = "";

    for (let j = 0; j < numSpaces; j++) {
      stringOutput += ' ';
    }

    for (let k = 0; k < numHashtags; k++) {
      stringOutput += '#';
    }

    console.log(stringOutput);
  }
}