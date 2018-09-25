function wordCountEngine(document) {
  let result = [];

  let split = document.split(' ');

  let words = [];

  let map = {};

  for (let i = 0; i < split.length; i++) {
    let current = "";

    for (let j = 0; j < split[i].length; j++) {
      let letter = split[i][j].toLowerCase();
      let alphabet = "abcdefghijklmnopqrstuvwxyz";

      if (alphabet.includes(letter)) {
        current += letter;
      }
    }

    if (!words.includes(current)) {
      words.push(current);
    }

    if (map[current]) {
      map[current]++;
    } else {
      if (current.length > 0) {
        map[current] = 1;
      }
    }
  }

  let keys = Object.keys(map);

  for (let k = 0; k < keys.length; k++) {
    let key = keys[k];

    let subarray = [key, map[key].toString()];

    result.push(subarray);
  }

  result = result.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] === b[1]) {
      if (words.indexOf(a[0]) <= words.indexOf(b[0])) return -1;
      if (words.indexOf(a[0]) > words.indexOf(b[0])) return 1;
    }
    if (a[1] > b[1]) return -1;
  });

  return result;
}

const document = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
//console.log(wordCountEngine(document));
