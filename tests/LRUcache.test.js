const { test, expect, beforeEach } = require('@jest/globals');
const LRU = require('../LRUcache.js');
let lru = null;

describe('LRUcache', () => {

  beforeEach(() => {
    lru = new LRU(3);
    lru.set('Bob', 'Alice');
    lru.set('lru', 'cache');
  });

  test('Sets values with "set" method', () => {
    var node1 = lru.map['Bob'];
    var node2 = lru.map['lru'];
    expect(node1.val).toMatch(/Alice/);
    expect(node2.val).toMatch(/cache/);
  });

  test('Gets values with "get" method', () => {
    var val1 = lru.get('Bob');
    var val2 = lru.get('lru');
    expect(val1).toMatch(/Alice/);
    expect(val2).toMatch(/cache/);
  });

  test('Removes least used key/value', () => {
    lru.set('Amanda', 'Archie');
    lru.set('Fred', 'Greg');
    expect(lru.get('Bob')).toBe(-1);
    expect(lru.get('lru')).toMatch(/cache/);
  })

  test('Set method changes values of existing keys', () => {
    lru.set('Bob', 'Amanda');
    expect(lru.get('Bob')).toMatch(/Amanda/);
  });

});