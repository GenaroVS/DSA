/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (!digits.length) return [];
  var combos = [];
  var map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  function traverse(combo, i) {
    if (i === digits.length) {
      combos.push(combo);
      return;
    }

    var letters = map[digits[i]];
    for (var char of letters) {
      traverse(combo + char, i + 1);
    }
  }

  traverse('', 0);

  return combos;
};