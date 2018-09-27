function bracketMatch(text) {
  let diffCounter = 0;
  let secondCounter = 0;

  for (let i = 0; i < text.length; i++) {
    let curr = text[i];

    if (curr === "(") {
      diffCounter++;
    } else if (curr === ")") {
      diffCounter--;
    }
    if (diffCounter < 0) {
      diffCounter++;
      secondCounter++;
    }
  }

  return diffCounter + secondCounter;
}

bracketMatch(")()()(");
bracketMatch("((())())()((");
