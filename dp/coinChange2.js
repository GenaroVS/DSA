/*
  You are given coins of different denominations and a total amount of money amount. Write a function to compute the total number of combinations of coins that you can make to get that amount.
*/

/**
 * @param {number}
 * @param {number[]}
 * @return {number}
 */
var coinChange2 = function(amount, coins) {
  if (amount === 0) {
    return 1;
  }
  if (coins.length === 0) {
    return 0;
  }

  var dp = Array(coins.length + 1).fill().map(() => Array(amount + 1));

  for (var i = 0; i <= coins.length; i++) {
    var coin = coins[i - 1];
    for (var j = 0; j <= amount; j++) {
      if (j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        dp[i][j] = 0;
      } else if (coin > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coin];
      }
    }
  }

  return dp[coins.length][amount];
};

// DP solution with 1 array
var coinChange2a = function(amount, coins) {
  var dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (var i = 0; i < coins.length; i++) {
    var coin = coins[i];
    for (var j = coin; j <= amount; j++) {
      dp[j] += dp[j - coin];
    }
  }

  return dp[amount];
};

console.log(coinChange2(5, [1,2,5]));
console.log(coinChange2a(5, [1,2,5]));