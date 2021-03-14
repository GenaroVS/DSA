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

class BST {
  constructor(node = null) {
    this.root = node;
    this.size = node ? 1 : 0;
  }

  search(val, root = this.root) {
    var node = root;

    while (node) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      } else if (val === node.val) {
        return node;
      } else {
        break;
      }
    }

    return null;
  }

  insert(val, root = this.root) {
    if (!root) {
      this.root = new Node(val);
      return root;
    }
    var node = root;

    while (true) {
      if (val > node.val) {
        if (!node.right) {
          node.right = new Node(val);
          break;
        }
        node = node.right;
      } else if (val < node.val) {
        if (!node.left) {
          node.left = new Node(val);
          break;
        }
        node = node.left;
      }
    }

    this.size++;
    return root;
  }

  delete(key, root = this.root) {
    if (!root) return null;

    if (key < root.val) {
      root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
      root.right = deleteNode(root.right, key);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      var temp = minVal(root.right);
      root.val = temp.val
      root.right = deleteNode(root.right, temp.val);
    }

    this.size--;
    return root;
  }

  kthSmallest(k, root = this.root) {
    if (k > this.size) return null;
    var stack = [];

    while (true) {
      while (root) {
        stack.push(root);
        root = root.left;
      }

      root = stack.pop();
      k--;
      if (k === 0) return root.val;
      root = root.right;
    }
  }

  kthLargest(k, root = this.root) {
    if (k > this.size) return null;
    var stack = [];

    while (true) {
      while (root) {
        stack.push(root);
        root = root.right;
      }

      root = stack.pop();
      k--;
      if (k === 0) return root.val;
      root = root.left;
    }
  }

  lowestCommonAncestor(p, q, root = this.root) {
    if (!root || root === p || root === q) {
      return root;
    }

    var left = lowestCommonAncestor(p, q, root.left);
    var right = lowestCommonAncestor(p, q, root.right);

    if (left && right) {
      return root;
    } else if (left) {
      return left;
    } else if (right) {
      return right;
    }
  }
}