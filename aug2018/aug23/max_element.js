function processData(input) {
  let split = input.split('\n');
  let stack = [];

  for (let i = 1; i < split.length; i++) {
    let query = split[i];

    if (query[0] === '1') {
      let data = query.split(' ')[1];

      stack.push(parseInt(data));
    }

    if (query[0] === '2') {
      stack.pop();
    }

    if (query[0] === '3') {

      let max = stack[0];
      for (let j = 1; j < stack.length; j++) {
        if (stack[j] > max) max = stack[j];
      }

      console.log(max);
    }
  }
} 