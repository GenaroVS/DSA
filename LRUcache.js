const DDL = require('./DoublyLinkedList.js');

/**
 * @param {number} capacity
 * @return {object}
 */
class LRUCache {
  constructor(capacity) {
    this.list = new DDL(null, null),
    this.map = {},
    this.size = 0,
    this.cap = capacity
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key){
    var node = this.map[key];
    if (node) {
      var value = node.val;
      this.list.remove(node)
      this.list.push(key, value);
      return value;
    }
    return -1;
  }

  /**
  * @param {number} key
  * @param {number} value
  * @return {void}
  */
  set(key, value) {
    var node = this.map[key];
    if (node) {
      this.list.remove(node);
      this.size--;
    }
    this.list.push(key, value);
    this.map[key] = this.list.get(this.list.length - 1);
    this.size++;
    if (this.size > this.cap) {
      let head = this.list.shift();
      delete this.map[head.key];
      this.size--;
    }
  }
}

module.exports = LRUCache;