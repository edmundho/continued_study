function makeAnagram(a, b) {
  let aCounter = {};
  let bCounter = {};
  
  for (let i = 0; i < a.length; i++) {
    let ch = a[i];
    if (aCounter[ch]) {
      aCounter[ch]++;
    } else {
      aCounter[ch] = 1;
    }
  }

  for (let j = 0; j < b.length; j++) {
    let ch = b[j];
    if (bCounter[ch]) {
      bCounter[ch]++;
    } else {
      bCounter[ch] = 1;
    }
  }
 
  let anagram = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let k = 0; k < alphabet.length; k++) {
    let ch = alphabet[k];
    let inBothStrings = aCounter[ch] && bCounter[ch];
    
    if (inBothStrings && aCounter[ch] === bCounter[ch]) {
      anagram += ch.repeat(aCounter[ch]);
    } else if (inBothStrings && aCounter[ch] > bCounter[ch]) {
      anagram += ch.repeat(bCounter[ch]);
    } else if (inBothStrings && aCounter[ch] < bCounter[ch]) {
      anagram += ch.repeat(aCounter[ch]);
    }
  }

  let numDeletions = (a.length - anagram.length) + (b.length - anagram.length);
  
  return numDeletions;
}
