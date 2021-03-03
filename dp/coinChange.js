/*
  You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = Array(coins.length + 1).fill(null).map(() => Array(amount + 1));
  var n = coins.length

  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= amount; j++) {
      if (j === 0) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = Number.MAX_SAFE_INTEGER;
      } else if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(dp[i][j - coins[i - 1]] + 1, dp[i - 1][j]);
      }
    }
  }

  var isValid = Number.MAX_SAFE_INTEGER !== dp[n][amount];
  return isValid ? dp[n][amount] : -1;
};