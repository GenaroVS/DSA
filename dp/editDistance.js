// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

/*
Operations:
  1. Insert
  2. Delete
  3. Replace
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
  var dp = [];
  var N = word1.length;
  var M = word2.length;

  for (var i = 0; i <= N; i++) {
    dp.push([]);
    for (var j = 0; j <= M; j++) {
      if (j === 0) {
        dp[i][j] = i;
      } else if (i === 0) {
        dp[i][j] = j;
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[N][M];
};

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
