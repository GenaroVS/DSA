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

  /**
   * Find and return 'val' in BST
   * @param {number} val
   * @param {node} root
   * @return {node | null}
   */
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

  /**
   * Insert 'val' in BST and return root node.
   * @param {number} val
   * @param {node} root
   * @return {node}
   */
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

  /**
   * Delete 'key' in BST and return root node.
   * @param {number} key
   * @param {node} root
   * @return {node}
   */
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

      var temp = kthSmallest(1, root.right);
      root.val = temp
      root.right = deleteNode(root.right, temp);
    }

    this.size--;
    return root;
  }

  /**
   * Return value of kth smallest node
   * @param {number} k
   * @param {node} root
   * @return {number}
   */
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

  /**
   * Return value of kth largest node
   * @param {number} k
   * @param {node} root
   * @return {number}
   */
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

  /**
   * Find and return LCG node of p and q nodes
   * @param {node} p
   * @param {node} q
   * @param {node} root
   * @return {node}
   */
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