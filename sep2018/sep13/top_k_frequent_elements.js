var topKFrequent = function (nums, k) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (counts[cur]) {
      counts[cur]++;
    } else {
      counts[cur] = 1;
    }
  }

  let keys = Object.keys(counts);
  keys.sort((a, b) => {
    if (counts[a] < counts[b]) return 1;
    if (counts[a] === counts[b]) return 0;
    if (counts[a] > counts[b]) return -1;
  });

  let answer = keys.slice(0, k).map(el => parseInt(el));

  return answer;
};