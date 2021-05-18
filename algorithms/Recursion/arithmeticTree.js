/*
Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.
*/

const arithmeticTree = (root) => {
  if (!root.left && !root.right) {
    return root.val;
  }

  var operator = root.val;
  var left = arithmeticTree(root.left);
  var right = arithmeticTree(root.right);

  if (operator === '+') return left + right;
  else if (operator === '-') return left - right;
  else if (operator === '*') return left * right;
  else if (operator === '/') return left / right;
};

