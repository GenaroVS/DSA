// Find number of partitions of a set into k subsets.

/**
 * O(Nk) Time
 * @param {number[]} nums
 * @param {number} k Amount of subsets that should be made
 * @return {number} Amount of ways to partition with k subsets
 */
const partitionIntoKSubsets = (nums, k) => {
  const N = nums.length;
  var dp = [];
  if (!nums || N === 0 || k === 0 || k > N) return 0;
  if (k === N || k === 1) return 1;

  for (var i = 0; i <= N; i++) { // nums
    dp.push([]);
    for (var j = 0; j <= k; j++) { // # of sets
      if (j === 0 || i === 0 || j > i) {
        dp[i][j] = 0;
      } else if (j === 1 || i === j) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] * j + dp[i - 1][j - 1];
      }
    }
  }

  return dp[N][k];
}

var nums = [1,2,3];
var nums2 = [1,2,3,4];
console.log(partitionIntoKSubsets(nums, 2));
console.log(partitionIntoKSubsets(nums2, 3));