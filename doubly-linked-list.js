class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  /**
   * @param {string} key
   * @param {*} val
   * @return {node}
   */
  createNode(key, val) {
    return {
      key,
      val,
      next: null,
      prev: null
    }
  }

  /**
   * @param {node} node
   * @return {void}
   */
  remove(node) {
    if (!node.prev && !node.next) {
      this.head = null;
      this.tail = null;
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }

  /**
   * @param {string} key
   * @param {*} value
   * @return {this}
   */
  push(key, value) {
    var node = this.createNode(key, value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  /**
  * Remove last node
  * @return {node}
  */
  pop() {
    var temp = this.tail;
    if (!this.head || !this.head.next) this.shift();

    this.tail = temp.prev;
    this.tail.next = null;
    this.length -= 1;
    return temp;
  }

  /**
  * Remove first node
  * @return {node}
  */
  shift() {
    var temp = this.head;
    if (!this.head) return null;
    else if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return temp;
    }

    this.head = this.head.next;
    this.head.prev = null;
    this.length -= 1;
    return temp;
  }

  /**
   * @param {*} val Value added at the start
   * @return {this}
   */
  unshift(key, value) {
    var node = this.createNode(key, value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length += 1;
    return this;
  }

  /**
  * @param {number} i
  * @return {node}
  */
  get(i) {
    if (i < 0 || i >= this.length) return false;
    var cur = this.head;

    while (cur) {
      if (i === 0) return cur;
      cur = cur.next;
      i -= 1;
    }
  }

  /**
  * @param {number} i
  * @param {*} val
  * @returns {boolean}
  */
  set(i, val) {
    var node = this.get(i);
    if (!node) return false;
    node.val = val;
    return true;
  }
}

module.exports = DoublyLinkedList;