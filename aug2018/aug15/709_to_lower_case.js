// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.



//   Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

var toLowerCase = function (str) {
  let result = '';


  for (let i = 0; i < str.length; i++) {
    result += str[i].toLowerCase();
  }

  return result;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));