var inorderTraversal = function(root) {
  let result = [];
  if (root === null) return result;
  let visited = [];
  let stack = [root];

  while (stack.length > 0) {
    let current = stack[stack.length - 1];

    if (current.left && !visited.includes(current.left)) {
      stack.push(current.left);
    } else if (current.right && !visited.includes(current.right)) {
      result.push(current.val);
      visited.push(current);
      stack.push(current.right);
    } else if (visited.includes(current)) {
      stack.pop();
    } else {
      visited.push(current);
      result.push(current.val);
      stack.pop();
    }
  }

  return result;
};
