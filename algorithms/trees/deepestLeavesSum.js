/**
 * @param {node} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
  var max = maxDepth(root);

  function getSum(node, depth, sum) {
    if (!node) {
      return sum;
    } else if (depth === max) {
      sum += node.val;
      return sum;
    }

    sum = getSum(node.left, depth + 1, sum);
    sum = getSum(node.right, depth + 1, sum);

    return sum;
  }

  return getSum(root, 1, 0);
};

function maxDepth(root) {
  if (!root) return 0;

  var left = maxDepth(root.left);
  var right = maxDepth(root.right);

  return left > right ? left + 1 : right + 1;
}