var sortColors = function (nums) {
  let red, white, blue;
  [red, white, blue] = [0, 0, nums.length - 1];


  while (white <= blue) {
    if (nums[white] === 0) {
      [nums[red], nums[white]] = [nums[white], nums[red]];
      red++;
      white++;
    } 
    else if (nums[white] === 1) {
      white++;
    }
    else {
      [nums[white], nums[blue]] = [nums[blue], nums[white]];
      blue--;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
// 0, 0, 2, 1, 1, 2  b  = 4  r, w = 0, 0
// 0, 0, 2, 1, 1, 2 b = 4, r, w = 1, 1
// 0, 0, 2, 1, 1, 2 b = 4, r, w = 2, 2
// 0, 0, 1, 1, 2, 2 b = 3, r, w = 2, 2
// 0, 0, 1, 1, 2, 2 b = 3 r = 2 w = 3
console.log(sortColors([2, 1, 2, 0, 1, 0]));
// 0, 1, 2, 0, 1, 2 b = 4, r, w = 0, 0
// 0, 1, 2, 0, 1, 2 b = 4, r, w = 1, 1
// 0, 1, 2, 0, 1, 2 b = 4, r = 1, w = 2
// 0, 1, 1, 0, 2, 2 b = 3, r = 1, w = 2
// 0, 0, 1, 1, 2, 2 b = 3, r = 2, w = 3

console.log(sortColors([2, 1, 1, 0, 1, 0]));
// 0, 1, 1, 0, 1, 2 b = 4 r, w = 0, 0
// 0, 1, 1, 0, 1, 2 b = 4 r, w = 1, 1
// 0, 1, 1, 0, 1, 2 b = 4 r = 1 w = 2
// 0, 1, 1, 0, 1, 2 b = 4 r = 1 w = 3
// 0, 0, 1, 1, 1, 2 b = 4, r = 2 w = 4
