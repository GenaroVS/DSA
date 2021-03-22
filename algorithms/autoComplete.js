const Trie = require('../trie.js');

const autoComplete = (prefix, words) => {
  var dict = new Trie();

  for (var word of words) {
    dict.insert(word);
  }

  var node = dict;
  for (var char of prefix) {
    if (!node.children[char]) {
      return [];
    }
    node = node.children[char];
  }

  return getAllWords(node);
};

function getAllWords(node, words = []) {
  if (node.word) words.push(node.word);

  for (var char in node.children) {
    words = getAllWords(node.children[char], words);
  }

  return words;
}

console.log(autoComplete('de', ['dog','deer','deal'])); // deer, deal
console.log(autoComplete('do', ['dog','deer','deal'])); // dog
console.log(autoComplete('d', ['dog','deer','deal'])) // dog, deer, deal
