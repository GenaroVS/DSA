const Stack = require('../Stack.js');
const Queue = require('../Queue.js');
var stack, queue;

describe('Stack and Queue', () => {

  beforeEach(() => {
    stack = new Stack();
    queue = new Queue();
  })

  test('Adds and removes values to a list', () => {
    stack.push(10);
    queue.enqueue(10);
    expect(stack.pop()).toEqual(10);
    expect(queue.dequeue()).toEqual(10);
  });

  test('Stack grabs last inserted first (LIFO)', () => {
    stack.push(10);
    stack.push(11);
    stack.push(12);
    expect(stack.pop()).toEqual(12);
  });

  test('Queue grabs first inserted first (FIFO)', () => {
    queue.enqueue(10);
    queue.enqueue(11);
    queue.enqueue(12);
    expect(queue.dequeue()).toEqual(10);
  });

  test('Returns null if empty', () => {
    stack.push(10);
    queue.enqueue(10);
    expect(stack.pop()).toEqual(10);
    expect(queue.dequeue()).toEqual(10);

    expect(stack.pop()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });
});