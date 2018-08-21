function balancedOrNot(expressions, maxReplacements) {
  let result = [];

  for (let i = 0; i < expressions.length; i++) {
    let currentExp = expressions[i];
    let replacementsNeeded = 0;
    let chCounter = {};
    for (let k = 0; k < currentExp.length; k++) {
      if (chCounter[currentExp[k]]) {
        chCounter[currentExp[k]]++;
      } else {
        chCounter[currentExp[k]] = 1;
      }
    }

    if (currentExp[currentExp.length - 1] === '<') {
      result.push(0);
    } else if (chCounter['<'] > chCounter['>']) {
      result.push(0);
    } else {
      for (let j = 0; j < currentExp.length; j++) {
        let currentCh = currentExp[j];

        if (currentCh === '>') {
          if (currentExp[j + 1] === '>') {
            if (j === 0) {
              replacementsNeeded++;
            } else if (currentExp[j - 1] !== '<') {
              replacementsNeeded++;
            }
          } else if (currentExp[j + 1] === undefined) {
            replacementsNeeded++;
          }
        }
      }

      if (replacementsNeeded > maxReplacements[i]) result.push(0);
      if (replacementsNeeded <= maxReplacements[i]) result.push(1);
    }

  }

  return result;
}