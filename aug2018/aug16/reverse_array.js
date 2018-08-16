function reverseArray(a) {
  let result = "";

  for (let i = a.length - 1; i >= 0; i--) {
    if (i === 0) {
      result += a[i];
    } else {
      result += a[i] + " ";
    }
  }

  console.log(result);
  return result.split(" ");
}