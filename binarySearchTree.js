class BST {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right
  }

  search(root = this.root, val) {
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

  insert(root = this.root, val) {
    if (!root) return new TreeNode(val);
    var node = root;

    while (true) {
      if (val > node.val) {
        if (!node.right) {
          node.right = new TreeNode(val);
          break;
        }
        node = node.right;
      } else if (val < node.val) {
        if (!node.left) {
          node.left = new TreeNode(val);
          break;
        }
        node = node.left;
      }
    }

    return root;
  }

  delete(root = this.root, key) {
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

    return root;
  }

  kthSmallest(root = this.root, k) {
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
}