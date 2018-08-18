function dynamicArray(n, queries) {
  let seqList = [];
  for (let i = 0; i < n; i++) {
    seqList[i] = [];
  }

  let lastAnswer = 0;
  let result = [];

  queries.forEach(query => {
    const index = (query[1] ^ lastAnswer) % n;
    if (query[0] === 1) {
      seqList[index].push(query[2]);
    }
    if (query[0] === 2) {
      const query2Index = query[2] % seqList[index].length;
      const val = seqList[index][query2Index];
      lastAnswer = val;
      
      console.log(lastAnswer);
      result.push(lastAnswer);
    }
  });

  return result;
}