
function flip(arr, k) {
  let pivot = Math.floor((k + 1) / 2);
  for (let i = 0; i < pivot; i++) {
    let temp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = temp;
  }
}

function pancakeSort(arr) {
  let lastIndex = arr.length - 1;

  while (lastIndex > 0) {
    let max = arr[0];
    let maxIndex = 0;

    for (let i = 0; i <= lastIndex; i++) {
      let current = arr[i];

      if (current > max) {
        max = current;
        maxIndex = i;
      }
    }

    flip(arr, maxIndex);
    flip(arr, lastIndex);
    lastIndex--;
  }

  return arr;
}

let array = [5, 6, 2, 8, 1]; // [1, 2, 4, 6, 8]
// [8, 2, 6, 5, 1]
// [1, 5, 6, 2, 8]
// [6, 5, 1, 2, 8]
// [2, 1, 5, 6, 8]
// [5, 1, 2, 6, 8]
// [2, 1, 5, 6, 8]
// [1, 2, 5, 6, 8]

// flip(array, 4);
//console.log(array);
// console.log(flip(array, 4));
console.log(pancakeSort(array));