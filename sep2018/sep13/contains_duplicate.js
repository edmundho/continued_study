var containsDuplicate = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (counts[current]) {
      counts[current]++;
    } else {
      counts[current] = 1;
    }
  }

  const values = Object.values(counts);
  const hasDups = values.some(value => value > 1);

  return hasDups;
};