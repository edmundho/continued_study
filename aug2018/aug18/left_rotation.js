function rotLeft(a, d) {
  // let result = a.slice();

  //   for (let i = 0; i < d; i++) {
  //     const leadingVal = result.shift();
  //     result.push(leadingVal);
  //   }

  // return result;

  let leadingSection = a.slice(d);
  let trailingSection = a.slice(0, d);
  return [...leadingSection, ...trailingSection];
}