// Given an integer, return its base 7 string representation.

//   Example 1:
// Input: 100
// Output: "202"

// Example 2:
// Input: -7
// Output: "-10"

// Note: The input will be in range of[-1e7, 1e7].


const convertBase7 = function (num) {
  if (num === 0) return "0";
  let array = [];
  let negative = false;
  if (num < 0) {
    num *= -1;
    negative = true;
  }

  while (num > 0) {
    array.unshift(num % 7);
    num = Math.floor(num / 7);
  }

  return negative ? `-${array.join('')}` : array.join('');
};

console.log(convertBase7(100));
console.log(convertBase7(197));
console.log(convertBase7(-7));