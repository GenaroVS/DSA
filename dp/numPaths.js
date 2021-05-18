/* Coding Problem #62
There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.
*/

/**
 *
 * @param {number} N
 * @param {number} M
 * @return {number} Number of paths to reach bottom right
 */
const numPaths = (N, M) => {
  let dp = [];

  if (N === 1 || M === 1) return 1;

  for (var i = 0; i < N; i++) {
    dp.push([]);
    for (var j = 0; j < M; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[N - 1][M - 1];
};

console.log(numPaths(5, 5));