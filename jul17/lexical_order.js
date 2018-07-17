// Given an integer n, return 1 - n in lexicographical order.

// For example, given 13, return: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9].

// Please optimize your algorithm to use less time and space.The input size may be as large as 5, 000, 000.

const lexicalOrder = function (n) {

  if (n < 10) {
    return [...Array(n + 1).keys() ].slice(1);
  }

  let subArrays = {
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [5],
    6: [6],
    7: [7],
    8: [8],
    9: [9]
  };

  for (let i = 10; i <= n; i++) {
    let firstDigit = i.toString()[0];
    subArrays[firstDigit].push(i);
  }

  let answer = [];
  Object.values(subArrays).forEach(arr => {
     answer = answer.concat(arr); 
    });
  return answer;
};

console.log(lexicalOrder(101));