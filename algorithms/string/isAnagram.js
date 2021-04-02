/*
Given two strings, determine if they are anagrams
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  var freq = {};

  for (var char of str1) {
    freq[char] = freq[char] + 1 || 1;
  }

  for (var char of str2) {
    if (!freq[char] || freq[char] <= 0) {
      return false;
    }
    freq[char] -= 1;
  }

  return true;
}

console.log(isAnagram('','')); // true
console.log(isAnagram('aaz','azz')); // false
console.log(isAnagram('rat','car')); // false
console.log(isAnagram('awesome','awesom')); // false
console.log(isAnagram('texttwisttime','timetwisttext')); // true