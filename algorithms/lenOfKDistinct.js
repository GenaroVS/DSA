
/**
 * Given an integer k and a string s, find the length of the longest substring that
 * contains at most k distinct characters.
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
const lenOfKDistinct = (str, k) => { // Sliding window solution
  var maxLen = Number.MIN_SAFE_INTEGER;
  var start = 0;
  var end = 0;
  var set = new Set();

  while (end < str.length) {
    set.add(str[end]);
    // If num of distinct chars in window are greater than k
      // Remove first char of window from set and move start pointer to next distinct char
    if (set.size > k) {
      var rmVal = str[start];
      set.delete(rmVal);
      while(str[start] === rmVal) {
        start += 1;
      }
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end += 1;
  }

  return maxLen;
};

console.log(lenOfKDistinct('abcba', 2)); // 3, bcb
console.log(lenOfKDistinct('aaaabcba', 2)); // 5, aaaab
console.log(lenOfKDistinct('abbcccddde', 2)); // 6, cccddd
console.log(lenOfKDistinct('abcde', 4)); // 4, abcd