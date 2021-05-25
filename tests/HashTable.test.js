const { TestWatcher } = require('@jest/core');
const HashTable = require('../HashTable.js');
let table = null;

describe('Hash Table', () => {
  beforeEach(() => {
    table = new HashTable(4);
  });

  test('Getter and Setter methods handle values', () => {
    table.set('Alice', 'Bob');
    table.set('bitcoin', 'ethereum');
    expect(table.get('Alice')).toBe('Bob');
    expect(table.get('bitcoin')).toBe('ethereum');
  });

  test('Collisions are handled', () => {
    table.set('Alice', 'Bob');
    table.set('ecilA', 'Tod');
    expect(table.get('Alice')).toBe('Bob');
    expect(table.get('ecilA')).toBe('Tod');
  });

  test('Delete method with collisions', () => {
    table.set('Alice', 'Bob');
    table.set('ecilA', 'Tod');
    expect(table.get('Alice')).toBe('Bob');
    expect(table.get('ecilA')).toBe('Tod');
    table.delete('ecilA');
    expect(table.get('ecilA')).toBeNull();
  });

  test('Table shrinks and grows to handle keys', () => {
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    table.set('key3', 'value3');
    expect(table.limit).toBe(4);
    table.set('key4', 'value4');
    expect(table.limit).toBe(8);
    table.delete('key1');
    table.delete('key2');
    table.delete('key3');
    expect(table.limit).toBe(4);
  });

  test('Keys method grabs all keys of table', () => {
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    expect(table.keys()).toEqual(['key1','key2']);
  });

  test('Values method grabs all unique values', () => {
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    table.set('key3', 'value2');
    expect(table.values()).toEqual(['value2','value1']);
  });
});