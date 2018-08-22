function isBalanced(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let last = stack.length - 1;
    let current = s[i];

    if (current === "{" || current === "(" || current === "[") {
      stack.push(current);
    } else if (current === "}" && stack[last] === "{") {
      stack.pop();
    } else if (current === "]" && stack[last] === "[") {
      stack.pop();
    } else if (current === ")" && stack[last] === "(") {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  console.log(stack);
  return stack.length > 0 ? "NO" : "YES";
}
