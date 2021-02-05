class LinkedNode {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  createNode(val, next) {
    return { val, next }
  }

  unshift(val) {
    var node = createNode(val, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  push(val) {
    var node = createNode(val, null);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addAtIndex(index, val) {
    var current = this.head;
    var node = this.createNode(val, null);

    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    while (current) {
      if (index === 1) {
        if (this.tail === current) {
          this.tail = node;
        }
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next
      index--;
    }
  }

  deleteAtIndex(index) {
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    var current = this.head;
    while (current.next) {
      if (index === 1) {
        if (this.tail === current.next) {
          this.tail = current;
        }
        current.next = current.next.next;
        break;
      }
      current = current.next;
      index--;
    }
  }

  deleteAllValues(val) {
    if (!this.head) return null;
    var current = this.head;

    while (current.next) {
      while (current.next && current.next.val === val) {
        current.next = current.next.next;
      }
      if (current.next) {
        current = current.next;
      }
    }

    if (this.head.val === val) {
      this.head = this.head.next;
    }

    return this.head;
  }

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
        return null;
      }
    }
  }

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

    return merged;
  }

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

    return this.head;
  }

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