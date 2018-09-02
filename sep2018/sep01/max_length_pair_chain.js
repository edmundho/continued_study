
// naive implementation. does not pass.
var findLongestChain = function (pairs) {
  let longestChain = [];
  let chain = [];

  let sortedPairs = pairs.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
  });

  let largestC = sortedPairs[sortedPairs.length - 1][0];

  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    chain.push(pair);
    console.log(pair);

    let b = chain[chain.length - 1][1] + 1;
    while (b <= largestC) {
      let nextPair = null;

      while (!nextPair) {
        let potentials = pairs
          .filter(el => el[0] === b)
          .sort((a, b) => {
            if (a[1] < b[1]) return -1;
            if (a[1] === b[1]) return 0;
            if (a[1] > b[1]) return 1;
          });
          console.log(potentials);

        if (potentials.length > 0) {
          nextPair = potentials[0];
          chain.push(nextPair);
        }

        if (b < largestC) {
          b++;
        } else {
          break;
        }
      }

      if (b >= largestC) break;
      b = chain[chain.length - 1][1] + 1;
    }

    if (chain.length > longestChain.length) {
      longestChain = chain;
      chain = [];
    } else {
      chain = [];
    }
  }

  console.log(longestChain);
  return longestChain.length;
};

let input = [[-10, -8], [8, 9], [-5, 0], [6, 10], [-6, -4], [1, 7], [9, 10], [-4, 7]];
let input2 = [[1, 2], [2, 3], [3, 4]];
let input3 = [[7, 9], [4, 5], [7, 9], [-7, -1], [0, 10], [3, 10], [3, 6], [2, 3]];
console.log(findLongestChain(input3));

// Java solution in discussion
/* 

public int findLongestChain(int[][] pairs) {
    if (pairs == null || pairs.length == 0) return 0;
    Arrays.sort(pairs, (a, b) -> (a[0] - b[0]));
    int[] dp = new int[pairs.length];
    Arrays.fill(dp, 1);
    for (int i = 0; i < dp.length; i++) {
        for (int j = 0; j < i; j++) {
            dp[i] = Math.max(dp[i], pairs[i][0] > pairs[j][1]? dp[j] + 1 : dp[j]);
        }
    }
    return dp[pairs.length - 1];
}

*/

var findLongestChain = function (pairs) {
  if (pairs === null || pairs.length < 1) return 0;

  let sorted = pairs.sort((a, b) => a[0] - b[0]);

  let dp = new Array(pairs.length);

  dp.fill(1);

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], sorted[i][0] > sorted[j][1] ? dp[j] + 1 : dp[j]);
    }
  }

  return dp[sorted.length - 1];
};