var containsDuplicate = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (counts[current]) {
      return true;
    } else {
      counts[current] = 1;
    }
  }

  return false;
};