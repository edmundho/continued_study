function checkMagazine(magazine, note) {
  let magWords = {};
  let noteWords = {};

  for (let i = 0; i < note.length; i++) {
    const currentNoteWord = note[i];
    if (!noteWords[note[i]]) {
      noteWords[currentNoteWord] = 1;
    } else {
      noteWords[currentNoteWord]++;
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    const currentMagWord = magazine[j];
    if (!magWords[currentMagWord]) {
      magWords[currentMagWord] = 1;
    } else {
      magWords[currentMagWord]++;
    }
  }

  for (let k = 0; k < note.length; k++) {
    const currentWord = note[k];
    const notEnoughWords = magWords[currentWord] < noteWords[currentWord];
    if (!magWords[currentWord] || notEnoughWords) {
      console.log("No");
      return "No";
    }
  }

  console.log("Yes");
  return "Yes";
}