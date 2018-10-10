var inorderTraversal = function(root) {
  let result = [];
  let visited = {};
  let stack = [root];

  while (stack.length > 0) {
    let current = stack[stack.length - 1];
    // visited[current] = true;

    if (current.left && !visited[current.left]) {
      current = current.left;
      stack.push(current);
    } else if (current.left && visited[current.left]) {
      result.push(current.val);
    } else if (current.right && !visited[current.right]) {
      current = current.right;
      stack.push(current);
    } else {
      visited[current] = true;
      result.push(current.val);
      stack.pop();
    }
  }
};
