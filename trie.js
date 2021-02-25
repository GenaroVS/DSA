class Trie {
  constructor() {
    this.isWord = false;
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
    node.isWord = true;
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
    return node.isWord;
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
}



