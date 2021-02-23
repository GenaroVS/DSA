function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

class binaryTree {
  constructor(node = null) {
    this.root = node;
  }

  preorder(root = this.root, arr = []) {
    if (!root) return arr;

    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);

    return arr;
  };

  inorder(root = this.root, arr = []) {
    if (!root) return arr;

    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);

    return arr;
  };

  postorder(root = this.root, arr = []) {
    if (!root) return arr;

    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);

    return arr;
  };

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
}