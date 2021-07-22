const Stack = require('../../Stack.js');

/*
Implement a queue using two stacks.
Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods:
enqueue, which inserts an element into the queue, and dequeue, which removes it.
*/

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack2.size <= 0) {
      while (this.stack1.size > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}