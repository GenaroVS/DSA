/**
 * Count the number of subsets of given list 'nums' that adds up to 'sum'
 * @param {number[]} nums
 * @param {number} sum
 * @return {number}
 */
const countSubsetSum = (nums, sum) => {
  var dp = Array(nums.length + 1).fill(null).map(() => Array(sum + 1));

  for (var i = 0; i <= nums.length; i++) {
    for (var j = 0; j <= sum; j++) {
      if (j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        dp[i][j] = 0;
      } else if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else if (nums[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][sum];
};

console.log(countSubsetSum([3,1,2,3], 6)); // 3 [[1,2,3],[3,1,2],[3,3]]
console.log(countSubsetSum([1,2,3,2], 4)); // 2