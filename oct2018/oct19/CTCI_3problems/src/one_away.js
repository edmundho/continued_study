function oneAway (str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;

  let diff = 0;

  if (str1.length !== str2.length) {
    const longerStr = str1.length > str2.length ? str1 : str2;
    const shorterStr = str1.length > str2.length ? str2 : str1;

    for (let i = 0, j = 0; i < longerStr.length; ) {
      if (longerStr[i] !== shorterStr[j]) {
        diff++;
        i++;
      } else {
        i++;
        j++;
      }

      if (diff > 1) return false;
    }
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diff++;
      }

      if (diff > 1) return false;
    }
  }
  
  return true;
}