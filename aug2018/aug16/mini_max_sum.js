function miniMaxSum(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let fourOutOfFive = [...arr.slice(0, i), ...arr.slice(i + 1)];
    let sum = fourOutOfFive.reduce((acc, el) => acc + el);
    result.push(sum);
  }

  result = result.sort((a, b) => a - b);

  console.log(`${result[0]} ${result[result.length - 1]}`);
}