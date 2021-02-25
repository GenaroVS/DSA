class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
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
   * @return {node}
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

    return node;
  }
}

module.exports = DoublyLinkedList;