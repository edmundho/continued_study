// Reverse bits of a given 32 bits unsigned integer.

//   Example:

// Input: 43261596
// Output: 964176192
// Explanation: 43261596 represented in binary as 00000010100101000001111010011100, 
//              return 964176192 represented in binary as 00111001011110000010100101000000.

// Follow up:
// If this function is called many times, how would you optimize it ?

var reverseBits = function (n) {
  let array = [];
  let result = 0;

  while (n > 0) {
    array.push(n % 2);
    n = Math.floor(n/2);
  }

  while (array.length < 32) {
    array.push(0);
  }

  // return array;
  array = array.reverse();

  for (let i = 0; i < array.length; i++) {
    result += array[i] * Math.pow(2, i);
  }

  return result;
};

console.log(reverseBits(9));
console.log(reverseBits(19));
console.log(reverseBits(43261596));