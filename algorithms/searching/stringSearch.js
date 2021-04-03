// Find all occurances where a given substring (pattern) matches within given string.
// Return null if no matches.
// https://www.youtube.com/watch?v=BXCEFAzhxGY

/**
 * O(M + N) Time
 * O(M) Space
 * @param {string} str
 * @param {string} subStr
 * @return {number[]} indexes of occurance
 */
const searchString = (str, subStr) => { // Knuth-Morris-Pratt (KMP) Algorithm
  var lps = [0]; // Longest Proper prefix
  var j = 0;
  const M = subStr.length;
  const N = str.length;

  for (var i = 1; i < M; i++) { // Calculate lps matching prefixes at each index
    if (subStr[i] !== subStr[j]) {
      if (j === 0) {
        lps[i] = 0;
      } else {
        j = lps[j - 1];
        i -= 1;
      }
    } else {
      j += 1;
      lps[i] = j;
    }
  }

  var j = 0; // Pointer for substring
  var i = 0; // Pointer for search string
  var indexes = []

  while (i < N) {
    if (str[i] === subStr[j]) {
      j += 1;
      i += 1;
    }

    if (j === M) {
      indexes.push(i - M);
      j = lps[j - 1];
    } else if (i < N && str[i] !== subStr[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }

  return indexes;
};

console.log(searchString('adsgwadsxdsgwadsgz', 'dsgwadsgz')); // 9
console.log(searchString('AABAACAADAABAABA', 'AABA')) // 0, 9, 12