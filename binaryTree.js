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
    var level = 0;
    var queue = [[this.root, level]];

    while (queue.length) {
      var [current, level] = queue.shift();

      if (results.length <= level) {
        results.push([]);
      }
      results[level].push(current.val);

      if (current.left) queue.push([current.left, level + 1]);
      if (current.right) queue.push([current.right, level + 1]);
    }

    return results;
  };

  /**
   * @param {node} root
   * @param {number} depth
   * @return {number} Longest root to leaf path (1-indexed)
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

  /**
   * @param {node} root
   * @param {node} x
   * @param {node} y
   * @return {node} The lowest common ancestor of x and y
   */
  lowestCommonAncestor(root = this.root, x, y) {
    if (!root || root === p || root === q) {
      return root;
    }

    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
      return root;
    } else if (left) {
      return left;
    } else if (right) {
      return right;
    }
  }

  /**
   * Deserialized a binary tree into string format
   * @param {node} root
   * @return {string}
   */
  toString(root = this.root) {
    if (!root) return '';

    var results = '';
    var level = 0;
    var queue = [[root, level]];
    var lastLevel = this.maxDepth() - 1;

    while (queue.length > 0) {
      var [current, level] = queue.shift();

      if (current) {
        if (level !== lastLevel) {
          queue.push([current.left, level + 1]);
          queue.push([current.right, level + 1]);
        }
        results += queue.length > 0 ? current.val + ',' : current.val;
      } else {
        results += 'null,'
      }
    }

    return results;
  }

  /**
   * Serialize string format into binary tree
   * @param {string} data
   * @return {node}
   */
  fromString(data) {
    if (data === '') return null;
    var levelTraverse = data.split(',');
    var i = 1;
    var root = new TreeNode(levelTraverse[0]);
    var queue = [root];

    while (i < levelTraverse.length) {
      var current = queue.shift();
      var leftVal = levelTraverse[i];
      var rightVal = levelTraverse[i + 1];

      if (leftVal && leftVal !== 'null') {
        current.left = new TreeNode(leftVal);
      }

      if (rightVal && rightVal !== 'null') {
        current.right = new TreeNode(rightVal);
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      i += 2;
    }

    return root;
  }
}