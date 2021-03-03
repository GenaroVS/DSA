/**
 * Count the number of subsets of given list 'nums' whose difference equal 'sum'
 * @param {number[]} nums
 * @param {number} sum
 * @return {number}
 */
const countSubsetDif = (nums, diff) => {
  var sum = 0;
  for (var num of nums) {
    sum += num;
  }

  var target = (sum + diff) / 2;
  var dp = Array(nums.length + 1).fill(null).map(() => Array(Math.floor(target + 1)))

  for (var i = 0; i <= nums.length; i++) {
    for (var j = 0; j <= target; j++) {
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

  return dp[nums.length][target] ? dp[nums.length][target] : 0;
};

console.log(countSubsetDif([3,1,2,3], 3)); // [3,3] - [1,2], [3,1,2] - [3], [1,2,3] - [3]
console.log(countSubsetDif([3,1,2,3], 1)); // [3,1] - [2,3], [3,2] - [1,3]
console.log(countSubsetDif([3,1,2,3], 5)); // [3,3,1] - [2]
console.log(countSubsetDif([3,1,2,3], 10)); // 0

