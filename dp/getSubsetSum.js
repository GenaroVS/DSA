/*
Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const getSubsetSum = (nums, target) => {
  var dp = [];
  var results = [];

  for (var i = 0; i <= nums.length; i++) {
    dp.push([]);
    for (var j = 0; j <= target; j++) {
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

  var sum = target;
  var i = nums.length;
  while(sum) {
    if (dp[i - 1][sum - nums[i - 1]]) {
      results.push(nums[i - 1])
      sum -= nums[i - 1];
    }

    i -= 1;
  }

  return results;
};

var nums1 = [12,1,61,5,9,2];
console.log(getSubsetSum(nums1, 19));