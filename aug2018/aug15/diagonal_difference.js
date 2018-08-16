function diagonalDifference(arr) {
  let leftDiag = 0;
  let rightDiag = 0;

  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    leftDiag += arr[i][i];
    rightDiag += arr[i][j];
    j--;
  }

  let result = leftDiag - rightDiag;
  if (result < 0) result = result * -1;
  return result;
}