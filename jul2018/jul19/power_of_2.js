// Given an integer, write a function to determine if it is a power of two.

//   Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: 16
// Output: true
// Explanation: 2^4 = 16

// Example 3:

// Input: 218
// Output: false

const isPowerOfTwo = function (num) {
  if (num === 1) return true;
  while (num > 2) {
    if ((num / 2) % 2 !== 0) {
      return false;
    }
    num /= 2;
  }
  return true;
};


console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));
console.log(isPowerOfTwo(224));
console.log(isPowerOfTwo(32));
