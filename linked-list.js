class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  /**
   * @param {*} val
   * @param {node} next
   * @return {node}
   */
  createNode(val, next) {
    return { val, next }
  }

  /**
   * @param {*} val Value added at the start
   * @return {void}
   */
  unshift(val) {
    var node = this.createNode(val, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length += 1;
  }

  /**
   * @param {*} val Value added at the end
   * @return {void}
   */
  push(val) {
    var node = this.createNode(val, null);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
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
    this.length -= 1;
    return temp;
  }

  /**
  * Remove last node
  * @return {node}
  */
  pop() {
    if (!this.head || !this.head.next) {
      return this.shift();
    }

    var cur = head;
    while (cur.next.next) {
      cur = cur.next;
    }

    var oldTail = cur.next;
    cur.next = null;
    this.tail = cur;
    this.length -= 1;
    return oldTail;
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
   *
   * @param {number} i
   * @param {*} val
   * @returns {boolean}
   */
  set(i, val) {
    var node = this.get(i);
    if (!node) return false;
    node.val = val;
    return false;
  }

  /**
   * @param {number} index (0-based)
   * @param {*} val
   * @return {void}
   */
  addAt(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) this.unshift(val);
    else if (i === this.length) this.push(val);

    var prev = this.get(i - 1);
    var node = this.createNode(val, null);
    node.next = prev.next;
    prev.next = node;
    this.length += 1;
    return true;
  }

  /**
   * @param {number} index (0-based)
   * @return {void}
   */
  deleteAt(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();

    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return removed;
  }

  /**
   * @param {*} val
   * @return {head}
   */
  deleteAllValues(val) {
    if (!this.head) return null;
    var current = this.head;

    while (current.next) {
      while (current.next && current.next.val === val) {
        this.length -= 1;
        current.next = current.next.next;
      }
      if (current.next) {
        current = current.next;
      }
    }

    if (this.head.val === val) {
      this.shift();
    }

    return this.head;
  }

  /**
   * @return {boolean | node} If true, returns node that starts loop
   */
  hasCycle() {
    if (!this.head || !this.head.next) return false;
    var slow = this.head;
    var fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        slow = head;
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }
    return false;
  }

  /**
   * @param {head} headB
   * @return {boolean}
   */
  getIntersection(headB) {
    var nodeA = this.head;
    var nodeB = headB;
    var lastA = null;
    var lastB = null;

    while(nodeA && nodeB) {
      if (nodeA === nodeB) {
        return nodeA;
      }
      if (!nodeA.next) {
        lastA = nodeA;
        nodeA = headB;
      } else {
        nodeA = nodeA.next;
      }
      if (!nodeB.next) {
        lastB = nodeB;
        nodeB = this.head;
      } else {
        nodeB = nodeB.next;
      }
      if (lastB && lastA && lastB !== lastA) {
        return false;
      }
    }
  }

  /**
   * @return {head}
   */
  reverse() {
    var current = this.head;
    while (current && current.next) {
      var temp = this.head;
      this.head = current.next;
      current.next = current.next.next;
      this.head.next = temp;
    }
    return this.head;
  }

  /**
   * @param {head} l2
   * @return {head} New linked list, 'this' not modified
   */
  merge(l2) {
    if (!this.head && !l2) return null;

    var node1 = this.head;
    var node2 = l2;
    var node3 = this.createNode(null, null);
    var merged = new LinkedNode(node3, null);

    while (node1 || node2) {
      if (!node2 || (node1 && node1.val < node2.val)) {
        node3.val = node1.val;
        node1 = node1.next;
      } else if (!node1 || (node2 && node1.val >= node2.val)) {
        node3.val = node2.val;
        node2 = node2.next;
      }
      if (node1 || node2) {
        node3.next = this.createNode(null, null);
      } else {
        merged.tail = node3;
      }
      node3 = node3.next;
    }

    this.length += l2.length;
    return merged;
  }

  /**
   * @param {number} k Number of rotations right-wards
   * @return {head}
   */
  rotate(k) {
    if (!this.head) {
      return null;
    }

    // Find length of LL
    var len = 0;
    var node = this.head;
    while (node) {
      len++;
      node = node.next;
    }
    if (k % len === 0) return this.head;

    // separate into two segments
    k = k % len;
    node = this.head;
    var pivotIdx = len - k;
    var newHead = this.head;
    while (node.next) {
      if (pivotIdx === 1) {
        var temp = node.next;
        node.next = null;
        node = temp;
        newHead = temp;
      } else {
        node = node.next
      }
      pivotIdx--;
    }
    // Connect right segement to start of left segment and return head.
    node.next = this.head;
    this.head = newHead;
    return this.head;
  }

  /**
   * @param {array} arr
   * @return {head}
   */
  fromArray(arr) {
    var current = this.createNode(null, null);
    this.head = current;
    for (var i = 0; i < arr.length; i++) {
      current.val = arr[i];
      if (i === arr.length - 1) {
        this.tail = current;
      } else {
        current.next = this.createNode(null, null);
      }
      current = current.next;
    }

    this.length = arr.length;
    return this.head;
  }

  /**
   * @return {array}
   */
  toArray() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

module.exports = LinkedList;