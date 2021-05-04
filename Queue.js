class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
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
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
  }

  /**
   * @returns {*}
   */
  dequeue() {
    var temp = this.first;
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size -= 1;
      return temp.val;
    }

    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
}

module.exports = Queue;