function calculateBoolean(boolExpr) {
  let result = false;

  let stack = [];


  for (let i = 0; i < boolExpr.length; i++) {

    let current = boolExpr[i];

    if (current === ' ' || current === ',') {
      continue; // ignore commas & spaces

    } else if (current === ')') {
      // when we hit a closing bracket, we need to start evaluating whether the expression is true or false

      let eval = []; // initialize an array for values to evaluate

      while (stack[stack.length - 1] !== "(") {

        // fill up eval array from stack until we hit an opening bracket
        eval.push(stack.pop());

      }

      stack.pop(); // remove opening bracket

      // check top of stack to determine how to evaluate data in the eval array
      if (stack[stack.length - 1] === "&") {

        // we have to add to the eval array the result of what was evaluated already
        // or else we would just be evaluating one element
        // same on line 44
        result ? eval.push("t") : eval.push("f");

        result = eval.every(el => el === "t");

      } else if (stack[stack.length - 1] === '|') {

        result ? eval.push("t") : eval.push("f");

        result = eval.some(el => el === "t");

      } else if (stack[stack.length - 1] === '!') {

        if (eval.length === 0) {
          result = !result;
        } else {
          result = !eval.some(el => el === 't');
        }
      }

      stack.pop(); // remove operator
    }

    else {
      // push onto stack until we hit a closing bracket in the expression

      stack.push(current);
    }


  }

  // if expression has no operator, evaluate what's in the stack
  if (stack.length > 0) {
    result = stack.every(el => el === 't');
  }

  return result;
}
