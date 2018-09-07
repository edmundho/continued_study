var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (current === 0) {
      let j = i + 1;
      let swapIndex = null;
      while (!swapIndex && j < nums.length) {
        if (nums[j] !== 0) {
          swapIndex = j;
          break;
        }
        j++;
      }

      if (!swapIndex) {
        return;
      } else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  console.log(nums);
};
