class Trie {
  constructor() {
    this.word = null;
    this.baseTenNum = null;
    this.wordCount = 0;
    this.children = {};
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    var node = this;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!node.children[char]) {
        node.children[char] = new Trie();
      }
      node = node.children[char];
    }
    node.word = word;
    node.wordCount += 1;
  }

  /**
   * @param {number} num Number inserted as a binary number
   * @param {number} num Length of binary number (default = 32)
   * @return {void}
   */
  insertBin(num, len = 32) {
    var node = this;
    for (var i = len - 1; i >= 0; i--) {
      var bit = (num >> i) & 1;
      if (!node.children[bit]) {
        node.children[bit] = new Trie();
      }
      node = node.children[bit];
    }
    node.baseTenNum = num;
  }

  remove(word, i = 0) {
    if (!this) return;
    else if (this.word === word) {
      this.word = false;
      return this.isEmpty() ? false : true;
    }

    var char = word[i];
    var hasSubTree = this.children[char].remove(word, i + 1);

    if (!hasSubTree) delete this.children[char];
    return this.isEmpty() && !this.word ? false : true;
  }

  /**
   * Grab all words from given subTrie
   * @param {Trie} node
   * @param {string[]} words
   * @return {string[]}
   */
  getWords(node = this, words = []) {
    if (node.word) words.push(node.word);

    for (var char in node.children) {
      words = this.getWords(node.children[char], words);
    }

    return words;
  }

  /**
   * @param {string} word
   * @return {boolean} Whether word is in Trie
   */
  search(word) {
    var node = this;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.word ? true : false;
  }

  /**
   * @param {string} prefix
   * @return {boolean} Whether there are any words that start with prefix
   */
  startsWith(prefix) {
    var node = this;
    for (var i = 0; i < prefix.length; i++) {
      var char = prefix[i];
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  /**
   * @param {object} charMap Map of unique characters that can be used
   * @param {string} firstChar Char that word is required to have
   * @param {boolean} valid Checks if word has firstChar
   * @return {number}
   */
  countWords(charMap, firstChar, valid = false, count = 0) {
    var node = this;
    if (node.wordCount > 0 && valid) {;
      count += node.wordCount;
    }
    for (var char in node.children) {
      if (charMap[char]) {
        if (char == firstChar) {
          count = node.children[char]
            .countWords(charMap, firstChar, true, count);
        } else {
          count = node.children[char]
            .countWords(charMap, firstChar, valid, count);
        }
      }
    }

    return count;
  }

  /**
   * Grab all words with same prefix
   * @param {string} prefix
   * @return {string[]}
   */
  autoComplete(prefix) {
    var node = this;
    for (var char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    return this.getWords(node);
  }

  isEmpty(root = this) {
    for (var char in root.children) {
      return false;
    }
    return true;
  }
}

module.exports = Trie



