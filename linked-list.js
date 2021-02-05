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

  hasCycle(head) {
    if (!head || !head.next) return false;
    var slow = head;
    var fast = head;

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


}