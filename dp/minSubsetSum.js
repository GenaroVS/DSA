/**
 * Given an integer array 'nums'.
 * You need to divide 'nums' into two subsets S1 and S2 such that the absolute difference
 * between their sums is minimum.
 * Find and return this minimum possible absolute difference
 *
 * Subsets can be empty but combined should have all the numbers
 * @param {number[]} nums
 * @return {number}
 */
const minSubsetSum = (nums) => {
  var sum = 0;
  for (var num of nums) {
    sum += num;
  }

  var dp = Array(nums.length + 1).fill(null).map(() => Array(Math.floor(sum / 2 + 1)))

  // subsetSum Problem
  for (var i = 0; i <= nums.length; i++) { // i = number
    for (var j = 0; j <= sum; j++) { // j = local sum
      if (j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = false;
      } else if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  var min = Number.MAX_SAFE_INTEGER;

  // If there is a subset from any nums (last row in dp) for any sum / 2,
  // then we find minimum difference of total sum with respective sum that subset forms.
  // y + x = sum
  // y - x = (sum - x) - x = sum - 2x
  for (var i = 0; i < dp[nums.length].length; i++) { // i = local sum
    if (dp[nums.length][i]) {
      min = Math.min(min, Math.abs(sum - (2 * i)));
    }
  }

  return min;
}

console.log(minSubsetSum([1,6,11,5])); // 1
console.log(minSubsetSum([1,2,3,4,5])); // 1