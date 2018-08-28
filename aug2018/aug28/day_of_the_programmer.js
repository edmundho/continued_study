function dayOfProgrammer(year) {
  let julian = false;

  if (year < 1918) {
    julian = true;
  } else if (year === 1918) {
    return '26.09.1918';
  }

  if (julian) {
    if (year % 4 === 0) {
      return `12.09.${year}`;
    }
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return `12.09.${year}`;
    }
  }

  return `13.09.${year}`;
}