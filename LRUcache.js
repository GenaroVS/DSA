const DDL = require('./doubly-linked-list.js');

/**
 * @param {number} capacity
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
      this.map[key] = this.list.push(key, value);
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
    this.map[key] = this.list.push(key, value);
    this.size++;
    if (this.size > this.cap) {
      delete this.map[this.list.head.key];
      this.list.remove(this.list.head);
      this.size--;
    }
  }
}

module.exports = LRUCache;