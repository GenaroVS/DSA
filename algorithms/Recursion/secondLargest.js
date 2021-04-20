// Given the root to a binary search tree, find the second largest node in the tree.

const getSecondLargest = (root, n = 0) => {
  var count = 0;
  var node = null;

  function traverse(root) {
    if (!root || n >= 2) return;

    getSecondLargest(root.right, n);

    count += 1;

    if (count === 2) {
      node = root;
      return;
    };

    return getSecondLargest(root.left, n);
  };

  traverse();
  return count;
}
