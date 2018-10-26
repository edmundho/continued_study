function isEqual (arg1, arg2) {
  if (!arg1 || !arg2) return false;

  if (typeof arg1 !== typeof arg2) return false;

  if (typeof arg1 !== "object") {
    return arg1 === arg2;
  } else {
    const keys1 = Object.keys(arg1); 
    const keys2 = Object.keys(arg2);

    const vals1 = Object.values(arg1);
    const vals2 = Object.values(arg2);

    if (keys1.length !== keys2.length || vals1.length !== vals2.length) {
      return false;
    } else {
      let i;
      for (i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) return false;
      }
      for (i = 0; i < vals1.length; i++) {
        if (!isEqual(vals1[i], vals2[i])) return false;
      }
    }
  }

  return true;
}

const arg1 = { a: 1, b: 2, d: { c: 4 } };
const arg2 = { a: 1, b: 2, d: { c: 4 } };

console.log (isEqual(arg1, arg2));