const LinkedList = require('../LinkedList');
let list = null;

describe('Linked List', () => {

  beforeEach(() => {
    list = new LinkedList();
  })

  test('Shift, Unshift, Push, and Pop methods', () => {
    list.push('A');
    list.push('B');
    expect(list.pop()).toBe('B');
    list.unshift('B');
    expect(list.shift()).toBe('B');
    expect(list.pop()).toBe('A');
    expect(list.pop()).toBeNull();
  });

  test('Get and Set methods', () => {

  });

  test('addAt and deleteAt methods', () => {

  });

  test('Detects cycles', () => {

  });

  test('Gets the intersection if cycle exists', () => {

  });

  test('Reverses itself', () => {

  });

  test('Merges with another linked list', () => {

  });

  test('Rotates k times', () => {

  });

  test('Transforms to and from an array', () => {

  });
});