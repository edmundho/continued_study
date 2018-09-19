// var removeDuplicates = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let curr = nums[i];

//     if (curr === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(nums);
//   return nums.length;
// };

// solution 2:
var removeDuplicates = function (nums) {
  let c = 1;

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    if (curr !== nums[i - 1]) {
      nums[c] = curr;
      c++;
    }
  }

  return c;
};