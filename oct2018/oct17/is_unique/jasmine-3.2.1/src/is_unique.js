function uniq (string) {
  const counts = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (counts[letter]) {
      return false;
    } else {
      counts[letter] = 1;
    }
  }

  return true;
}

function uniq2 (string) {
  const sorted = string.split('').sort();
  console.log(sorted);

  for (let i = 1; i < sorted.length; i++) {
    const ch = sorted[i];
    if (ch === sorted[i - 1]) return false;
  }

  return true;
}

// const string = "fdksfjewiojfnlkvnznoiehtoiy0382751ohfwobgsjkabjl";
// console.log(uniq2(string));