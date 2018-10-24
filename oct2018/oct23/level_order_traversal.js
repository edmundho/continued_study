function levelOrder (root) {
  if (root === null) return [];
  const result = [], queue = [root];

  while (queue.length > 0) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (current) {
        level.push(current.val);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    result.push(level);
  }

  return result;
}