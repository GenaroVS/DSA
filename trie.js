class Trie {
  constructor() {
    this.isWord = false;
    this.children = {};
  }

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
  }

  search(word) {
    var node = this;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isWord ? true : false;
  }

  startsWith(prefix) {
    var node = this;
    for (var i = 0; i < prefix.length; i++) {
      var char = prefix[i];
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}