/**
 * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
 * Leaves
 * Given the root to a binary tree, count the number of unival subtrees.
 * @param {tree} root
 * @param number
 */
const countUnivalTree = (root) => {
  var [count, bool] = recurse(root);
  return count;
}

function recurse(root) {
  if (!root) {
    return [0, true];
  }

  var [leftCount, isLeft] = recurse(root.left);
  var [rightCount, isRight] = recurse(root.right);
  var total = leftCount + rightCount;

  if (isLeft && isRight) {
    if (root.left && root.left.val !== root.val) {
      return [total, false];
    }
    if (root.right && root.right.val !== root.val) {
      return [total, false];
    }

    return [total + 1, true];
  }

  return [total, false]
}