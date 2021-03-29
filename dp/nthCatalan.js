/**
 * Catalan Number - C(0) * C(n-1) + C(1) * C(n-2) + ... + C(i) * C(n-i-1) + C(n-1) * C(0)
 * C(3) = C(0)C(2) + C(1)C(1) + C(2)C(0);
 * C(3) = 1*2 + 1*1 + 2*1 = 5
 */

/**
 * Find nth catalan number (2 methods)
 * O(n^2) Time
 * O(n) Space
 * @param {number} n
 * @return {number}
 */
const nthCatalan = (n) => { // Dynamic Programming
  if (n === 0 || n === 1) return 1;
  var dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (var i = 2; i < n + 1; i++) {
    for (var j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
};

console.log(nthCatalan(5));

/**
 * Find nth catalan number (2 methods)
 * O(n) Time
 * O(n) Space
 * @param {number} n
 * @return {number}
 */
const nthCatalan2 = (n) => { // Binomial Coefficient C(n) = (2n)! / n!(n + 1)!
  var fact = [];
  fact[0] = 1;

  function factorial(x) {
    if (fact[x - 2]) {
      fact[x - 1] = fact[x - 2] * x;
    } else {
      for (var i = 1; i < x; i++) { // 2n time complexity
        fact[i] = fact[i - 1] * (i + 1);
      }
    }

    return fact[x - 1];
  }

  return factorial(n * 2) / (factorial(n) * factorial(n + 1));
};

console.log(nthCatalan2(5));