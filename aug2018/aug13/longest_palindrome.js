// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//   Example 2:

// Input: "cbbd"
// Output: "bb"

// let [maxLen, lo] = [0, 0];
let maxLen = 0;
let lo = 0;

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  
  for (let i = 0; i < s.length - 1; i++) {
    extendPalindrome(s, i, i);
    extendPalindrome(s, i, i + 1);
  }

  return s.substring(lo, lo + maxLen);
};

var extendPalindrome = function (s, j, k) {
  while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
    j--;
    k++;
  }

  if (maxLen < k - j - 1) {
    lo = j + 1;
    maxLen = k - j - 1;
  }
};

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('cbbbd'));
// console.log(longestPalindrome('cbbbbd'));
// console.log(longestPalindrome('cbbbbbd'));
// console.log(longestPalindrome('racecar'));