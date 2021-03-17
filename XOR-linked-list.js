// Theoritical example since javascript doesn't have pointers to XOR.
// Pretending that we can XOR nodes (JS Objects).

class XorLL {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  /**
   * @param {*} val
   * @param {node} next
   * @return {node}
   */
  createNode(val, xor) {
    return { val, xor }
  }

  /**
   * @param {*} val Value added at the start
   * @return {void}
   */
  unshift(val) {
    var node = this.createNode(val, 0 ^ this.head.val);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  /**
   * @param {*} val Value added at the end
   * @return {void}
   */
  push(val) {
    var node = this.createNode(val, this.tail ^ 0);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
      var prev = this.tail ^ 0;
      this.tail.xor = prev ^ node;
      this.tail = node;
    }
  }

  /**
   * Get node at given index
   * @param {number} idx
   * @return {node | null}
   */
  get(idx) {
    if (idx === 0) return this.head;
    var current = this.head;
    var prev = 0;

    while(current) {
      idx -= 1;
      if (idx === 0) {
        return current;
      }
      var temp = prev;
      prev = current;
      current = current.xor ^ temp;
    }

    return null;
  }
}