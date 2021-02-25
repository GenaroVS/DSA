/**
 * @param {*} val
 * @param {node} left
 * @param {node} right
 * @return {void}
 */
function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

class binaryTree {
  constructor(node = null) {
    this.root = node;
  }

  /**
   * @param {node} root
   * @param {array} arr
   * @return {array}
   */
  preorder(root = this.root, arr = []) {
    if (!root) return arr;

    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);

    return arr;
  };

  /**
   * @param {node} root
   * @param {array} arr
   * @return {array}
   */
  inorder(root = this.root, arr = []) {
    if (!root) return arr;

    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);

    return arr;
  };

  /**
   * @param {node} root
   * @param {array} arr
   * @return {array}
   */
  postorder(root = this.root, arr = []) {
    if (!root) return arr;

    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);

    return arr;
  };

  /**
   * @return {array}
   */
  levelOrder() {
    if (!this.root) return [];

    var results = [];
    var queue = [this.root];
    var leftMost = this.root;
    var level = [];

    while (queue.length > 0) {
      var current = queue.shift();

      if (current === leftMost && current !== this.root) {
        results.push(level);
        level = [];
      }

      if (!leftMost || current === leftMost) {
        if (current.left) {
          leftMost = current.left;
        } else if (current.right) {
          leftMost = current.right;
        } else {
          leftMost = null;
        }
      }

      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    results.push(level);
    return results;
  };

  /**
   * @param {node} root
   * @param {number} depth
   * @return {number} Longest root to leaf path
   */
  maxDepth(root = this.root, depth = 0) {
    if (!root) return 0;

    var leftDepth = maxDepth(root.left, depth);
    var rightDepth = maxDepth(root.right, depth);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
  }

  /**
   * @param {node} root
   * @param {number} min
   * @param {number} max
   * @return {boolean} Right side must be larger, left side must be smaller
   */
  isValidBST(root = this.root, min, max) {
    if (!root) return true;

    if (root.val <= min || root.val >= max) {
      return false;
    }

    var validLeft = isValidBST(root.left, min, root.val);
    var validRight = isValidBST(root.right, root.val, max);

    return validLeft && validRight;
  }

  /**
   * @param {node} root
   * @return {boolean} Whether right side is mirror of left side
   */
  isSymmetric(root = this.root) {
    if (!root) return true;

    function isValid(left, right) {
      if (!left || !right) {
        return left === right;
      }
      if (left.val !== right.val) {
        return false;
      }
      return isValid(left.left, right.right) && isValid(left.right, right.left);
    }

    return isValid(root.left, root.right);
  }
}