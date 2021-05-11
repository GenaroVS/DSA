/*
Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less. You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words. If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.
*/

/**
 * @param {string} str
 * @param {number} k
 * @return {string[]}
 */
const formLines = (str, k) => {
  for (var word of str.split(' ')) {
    if (word.length > k) return null;
  }

  let lines = [];
  let left = 0;
  let right = 0;
  let lastSpaceIndex = 0;

  for (var i = 0; i < str.length; i++) {
    if (right - left > k) {
      if (str[i] === ' ') {
        lines.push(str.slice(left, right));
        left = right + 1;
        lastSpaceIndex = i;
      } else {
        lines.push(str.slice(left, lastSpaceIndex));
        lastSpaceIndex += 1;
        left = lastSpaceIndex;
      }
    } else if (str[i] === ' ') lastSpaceIndex = i;

    right += 1;
  }

  lines.push(str.slice(left, right));

  return lines;
};

let string = 'the quick brown fox jumps over the lazy dog';
console.log(formLines(string, 10));