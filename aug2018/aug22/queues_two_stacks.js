function processData(input) {
  let split = input.split('\n');

  let lifo = [];
  let fifo = [];

  for (let i = 1; i < split.length; i++) {
    let query = split[i];

    if (query[0] === "1") {
      let data = parseInt(query.slice(2));

      lifo.push(data);
    }

    if (query[0] === "2") {

      if (fifo.length === 0) {
        while (lifo.length > 0) {
          fifo.push(lifo.pop());
        }
      }

      fifo.pop();
    }

    if (query[0] === "3") {

      if (fifo.length === 0) {
        console.log(lifo[0]);
      } else {
        console.log(fifo[fifo.length - 1]);
      }
    }

  }
} 