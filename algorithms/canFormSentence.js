/* Given a dictionary of words and a string made up of those words (no spaces), return whether or not the string forms a sentence with the given dictionary. */

const Trie = require('../trie.js');

/**
 *
 * @param {string} str
 * @param {string[]} words
 * @return {string[]}
 */
const canFormSentence = (str, dict) => {
  var trie = new Trie();
  var dp = Array(str.length + 1).fill(false);
  dp[0] = true;

  for (var word of dict) {
    trie.insert(word);
  }

  for (var i = 1; i <= str.length; i++) {
    var node = trie;
    for (var j = 0; j < i; j++) {
      if (dp[j] && trie.search(str.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[str.length];
};

var words = ['quick','brown','the','fox'];
var str = 'thequickbrownfox';
var str2 = 'catquickbrownfox';
var sent = findSentence(str, words);
var sent2 = findSentence(str2, words);
console.log(sent); // the quick brown fox
console.log(sent2); // null

var words3 = ['bed', 'bath', 'bedbath', 'and', 'beyond'];
var str3 = 'bedbathandbeyond';
var sent3 = findSentence(str3, words3);
console.log(sent3); // bed bath and beyond OR bedbath and beyond

var words4 = ['aaaa', 'aa'];
var str4 = 'aaaaaaa';
var sent4 = findSentence(str4, words4);
console.log(sent4); // null

var words5 = ['aaaa', 'aaa'];
var str5 = 'aaaaaaa';
var sent5 = findSentence(str5, words5);
console.log(sent5); // aaa aaaa


/* const Dict = new Trie();
  var sentence = [];
  var idx = 0;
  var isSentence = true;

  for (var word of words) {
    Dict.insert(word);
  }

  while (isSentence && idx < str.length) {
    var node = Dict;
    for (var i = idx; i < str.length; i++) {
      var char = str[i];

      if (node.children[char]) {
        node = node.children[char];
      } else {
        isSentence = false;
        break;
      }
      if (node.word) {
        sentence.push(node.word);
        idx += node.word.length;
        break;
      }
    }

    if (isSentence && !node.word) {
      isSentence = false;
    }
  }

  return isSentence ? sentence : null;

*/