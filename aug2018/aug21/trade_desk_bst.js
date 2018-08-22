function MergeStrings(strings) {

  // object to count all occurrences of the alphabet
  let letterCounts = {};

  for (let i = 0; i < strings.length; i++) {

    for (let j = 0; j < strings[i].length; j++) {

      let ch = strings[i][j]; // current letter in nested string
      if (letterCounts[ch]) {
        letterCounts[ch]++; // increment if key exists
      } else {
        letterCounts[ch] = 1; // create key-val if doesn't exist
      }

    }

  }

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  // build result string by iterating through alphabet and
  // checking letterCounts for number of times to repeat letter

  for (let k = 0; k < alphabet.length; k++) {
    let alpha = alphabet[k];
    result += alpha.repeat(letterCounts[alpha]);
  }

  return result;
}