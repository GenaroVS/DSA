//Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST)// next() returns the next node value in the tree
// hasNext() return whether there is a next value

class BSTIterator {
  constructor(root) {
    this.root = root;
    this.stack = [];
    this.pushLefts(root);
  }

  next() {
    let node = this.stack.pop();
    this.pushLefts(node.right);
    return node.val;
  }

  hasNext() {
    return this.stack.length ? true : false;
  }

  pushLefts(root) {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }
}