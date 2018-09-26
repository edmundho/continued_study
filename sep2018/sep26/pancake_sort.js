/*
Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array.You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

  Example:

input: arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5]# to clarify, this is pancakeSort's output

Analyze the time and space complexities of your solution.

  Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate.To read more about the problem, see the Pancake Sorting Wikipedia page.


  Constraints:

[time limit] 5000ms

[input] array.integer arr

[input] integer k

0 ≤ k
[output] array.integer
*/


function flip(arr, k) {
  let section = arr.slice(0, k);
  arr = [...section.reverse(), ...arr.slice(k)];
  return arr;
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
    arr = flip(arr, maxIndex + 1);
    arr = flip(arr, lastIndex + 1);
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


// console.log(flip(array, 4));
console.log(pancakeSort(array));