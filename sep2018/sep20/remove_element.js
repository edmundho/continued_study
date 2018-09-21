var removeElement = function (nums, val) {
  if (nums.length < 1) return 0;

  let front = 0;
  let back = nums.length - 1;

  while (front < back) {

    if (nums[front] === val && nums[back] !== val) {
      [nums[front], nums[back]] = [nums[back], nums[front]];
      front++;
      back--;
    } else if (nums[back] === val) {
      back--;
    } else {
      front++;
    }
  }

  let newLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newLength++;
    } else {
      return newLength;
    }
  }


};