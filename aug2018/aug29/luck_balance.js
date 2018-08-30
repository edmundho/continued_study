function luckBalance(k, contests) {
  let important = [];
  let unimportant = [];

  for (let i = 0; i < contests.length; i++) {
    let current = contests[i];

    if (current[1] === 1) {
      important.push(current);
    } else {
      unimportant.push(current);
    }
  }

  let sortedImpContests = important.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
  });

  let balance = 0;

  for (let j = 0; j < unimportant.length; j++) {
    balance += unimportant[j][0];
  }

  if (k >= sortedImpContests.length) {
    for (let n = 0; n < sortedImpContests.length; n++) {
      balance += sortedImpContests[n][0];
    }
  } else {
    let lowestValue = sortedImpContests.length - k;
    let contestsToWin = sortedImpContests.slice(0, lowestValue);
    let contestsToLose = sortedImpContests.slice(lowestValue);

    for (let u = 0; u < contestsToWin.length; u++) {
      balance -= contestsToWin[u][0];
    }
    for (let v = 0; v < contestsToLose.length; v++) {
      balance += contestsToLose[v][0];
    }
  }

  return balance;
}