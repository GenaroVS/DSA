// Given an integer n, return the nth ugly number.
// Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.
/**
 * O(n) Time
 * O(n) Space
 * @param {number} n
 * @return {number} nth ugly number
 */
const nthUglyNumber = (n) => {
  var dp = [];
  dp[0] = 1;
  var i2 = 0;
  var i3 = 0;
  var i5 = 0;

  for (var i = 1; i < n; i++) {
    var val2 = dp[i2] * 2;
    var val3 = dp[i3] * 3;
    var val5 = dp[i5] * 5;

    dp[i] = Math.min(val2, val3, val5);

    if (dp[i] === val2) i2 += 1;
    if (dp[i] === val3) i3 += 1;
    if (dp[i] === val5) i5 += 1;

  }

  return dp[dp.length - 1];
}