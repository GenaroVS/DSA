const { test, expect, beforeEach } = require('@jest/globals');
const LFU = require('../LFUcache.js');
let lfu = null;

describe('LFUcache', () => {

  beforeEach(() => {
    lfu = new LFU(2);
    lfu.set('Bob', 'Alice');
    lfu.set('lfu', 'cache');
  });

  test('Sets values with "set" method', () => {
    var node1 = lfu.values.get('Bob');
    var node2 = lfu.values.get('lfu');
    expect(node1.value).toMatch('Alice');
    expect(node2.value).toMatch('cache');
  });

  test('Gets values with "get" method', () => {
    var val1 = lfu.get('Bob');
    var val2 = lfu.get('lfu');
    expect(val1).toMatch('Alice');
    expect(val2).toMatch('cache');
  });

  test('Removes least frequently used key/value', () => {
    lfu.get('Bob');
    lfu.set('Alex', 'Andres');
    expect(lfu.get('Bob')).toBe('Alice');
    expect(lfu.get('Alex')).toBe('Andres');
    expect(lfu.get('lfu')).toBeNull();
  })

  test('Set method changes values of existing keys', () => {
    lfu.set('Bob', 'Amanda');
    expect(lfu.get('Bob')).toMatch('Amanda');
  });

});