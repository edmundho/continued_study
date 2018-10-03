var searchInsert = function(nums, target) {
  if (nums.length < 1) return 0;

  for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      if (current === target) {
          return i;
      } else if (target < current) {
          return i;
      }
  }
  
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 2));

console.log(searchInsert([1, 3, 5, 6], 7));

console.log(searchInsert([1, 3, 5, 6], 0));