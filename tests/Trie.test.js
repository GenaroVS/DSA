const { expect } = require('@jest/globals');
const Trie = require('../Trie.js');
var trie = null;

describe('Trie Tests', () => {

  beforeEach(() => {
    trie = new Trie();
  });

  test('Can insert words', () => {
    trie.insert('Bob');
    trie.insert('Alice');
    var words = trie.getWords();
    expect(words).toContain('Bob');
    expect(words).toContain('Alice');
  });

  test('Can remove words', () => {
    trie.insert('Bob');
    trie.insert('Bobby');
    var words = trie.getWords();
    expect(words).toEqual(['Bob', 'Bobby']);

    trie.remove('Bobby');
    words = trie.getWords();
    expect(words).toEqual(['Bob']);

    trie.remove('Bob');
    words = trie.getWords();
    expect(words.length).toEqual(0);
  });

  test('Can search for words', () => {
    trie.insert('Bob');
    trie.insert('Bobby');
    expect(trie.search('Bob')).toBe(true);
    trie.remove('Bob');
    expect(trie.search('Bob')).toBe(false);
    expect(trie.search('Bobby')).toBe(true);
  });

  test('Can search words that start with given prefix', () => {
    trie.insert('Treasure');
    trie.insert('Treasure-Chest');
    expect(trie.startsWith('Trea')).toBe(true);
    expect(trie.startsWith('Bob')).toBe(false);
  });

  test('Can grab all words that start with given prefix', () => {
    trie.insert('Bob');
    trie.insert('Bobby');
    var words = trie.autoComplete('Bob')
    expect(words).toEqual(['Bob', 'Bobby']);

    words = trie.autoComplete('Bobb');
    expect(words).toEqual(['Bobby']);

    words = trie.autoComplete('Tob');
    expect(words.length).toEqual(0);
  });

});