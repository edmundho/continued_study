function matchingStrings(strings, queries) {
  let stringsFreq = {};

  for (let i = 0; i < strings.length; i++) {
    let current = strings[i];
    if (stringsFreq[current]) {
      stringsFreq[current]++;
    } else {
      stringsFreq[current] = 1;
    }
  }

  let result = [];

  for (let j = 0; j < queries.length; j++) {
    let currentQuery = queries[j];
    if (stringsFreq[currentQuery]) {
      result.push(stringsFreq[currentQuery]);
    } else {
      result.push(0);
    }
  }

  return result;
}