// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//   Example 2:

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function (s) {
  const array = s.split("");
  let result = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      let word = array.slice(i, j);
      let reversed = word.reverse();
      if (word.join('') === reversed.join('') && word.length > result.length) {
        result = word.join('');
      }
    }
  }

  return result;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('racecar'));