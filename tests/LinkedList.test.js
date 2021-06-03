const LinkedList = require('../LinkedList');
let list = null;

describe('Linked List', () => {

  beforeEach(() => {
    list = new LinkedList();
    list.push('A');
    list.push('B');
  })

  test('Shift, Unshift, Push, and Pop methods', () => {
    expect(list.pop().val).toBe('B');
    list.unshift('B');
    expect(list.shift().val).toBe('B');
    expect(list.pop().val).toBe('A');
    expect(list.pop()).toBeNull();
  });

  test('Get and Set methods', () => {
    list.set(1, 'C');
    expect(list.get(1).val).toBe('C');
  });

  test('Transforms to and from an array', () => {
    list.push('C');
    list.push('D');
    let arr = list.toArray();
    expect(arr).toEqual(['A','B','C','D']);
    let cur = new LinkedList().fromArray(arr);
    let i = 0;
    while (cur) {
      expect(cur.val).toBe(arr[i]);
      i += 1;
      cur = cur.next;
    }
  });

  test('addAt and deleteAt methods', () => {
    list.addAt(0, 'Z');
    list.addAt(2, 'C');

  });

  test('Detects cycles and returns start of loop if cycle exists', () => {
    expect(list.hasCycle()).toBe(false);
    list.push('C');
    let node = list.get(1);
    list.push('D', node);
    expect(list.hasCycle().val).toBe('B');
  });

  test('Gets the intersection if cycle exists', () => {
    list.push('C');
    list.push('D');
    let node = list.get(1);
    let list2 = new LinkedList();
    list2.push('Z');
    list2.push('Y', node);
    expect(list.getIntersection(list2.getHead()).val).toBe('B');
  });

  test('Reverses itself', () => {
    list.push('C');
    list.push('D');
    list.reverse();
    expect(list.toArray()).toEqual(['D','C','B','A']);
  });

  test('Merges with another linked list', () => {
    let list2 = new LinkedList();
    list2.push('C');
    list2.push('D');
    let list3 = list.merge(list2.getHead());
    expect(list3.toArray()).toEqual(['A','B','C','D']);
  });

  test('Rotates k times', () => {
    list.push('C');
    list.push('D');
    list.rotate(2);
    expect(list.toArray()).toEqual(['C','D','A','B']);
    list.rotate(-2);
    expect(list.toArray()).toEqual(['A','B','C','D']);
  });

});