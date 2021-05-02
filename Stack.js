class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   *
   * @param {*} val
   * @returns {void}
   */
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }

    this.size += 1;
  }

  /**
   * @returns {*}
   */
  pop() {
    var temp = this.first;
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size -=1;
      return temp.val;
    }

    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
}

module.exports = Stack;
