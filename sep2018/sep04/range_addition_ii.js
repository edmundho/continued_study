// operation timed out

var maxCount = function (m, n, ops) {
  let matrix = [];
  for (let times = 0; times < m; times++) {
    let row = new Array(n);
    row.fill(0);
    matrix.push(row);
  }

  for (let i = 0; i < ops.length; i++) {
    let currentOp = ops[i];

    for (let j = 0; j < currentOp[0]; j++) {
      for (let k = 0; k < currentOp[1]; k++) {
        matrix[j][k]++;
      }
    }
  }

  let nums = {};

  for (let l = 0; l < matrix.length; l++) {
    let currRow = matrix[l];

    for (let p = 0; p < currRow.length; p++) {
      let cell = currRow[p];

      if (nums[cell]) {
        nums[cell]++;
      } else {
        nums[cell] = 1;
      }
    }
  }

  let max = Math.max(...Object.keys(nums));

  return nums[max];
};

// wow

var maxCount = function (m, n, ops) {
  for (let i = 0; i < ops.length; i++) {
    if (ops[i][0] < m) m = ops[i][0];
    if (ops[i][1] < n) n = ops[i][1];
  }

  return m * n;
};