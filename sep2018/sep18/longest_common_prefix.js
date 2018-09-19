var longestCommonPrefix = function (strs) {
  let result = "";
  if (strs.length < 1) return result;

  const firstWord = strs[0];
  for (let i = 1; i < firstWord.length + 1; i++) {
    let prefix = firstWord.slice(0, i);

    const sharedByAll = strs.every((string) => string.startsWith(prefix));
    if (sharedByAll && prefix.length > result.length) {
      result = prefix;
    }
  }

  return result;
};