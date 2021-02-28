/**
 * Find whether or not a subset of a list of numbers can add up to a target sum
 * @param {number[]} nums
 * @param {number} sum
 * @return {boolean}
 */
const subsetSum = (nums, sum) => {
  var dp = Array(nums.length + 1).fill(null).map(() => Array(sum + 1));

  for (var i = 0; i <= nums.length; i++) { // i = number
    for (var j = 0; j <= sum; j++) { // j = current sum
      if (j === 0) {
        dp[i][j] = true;
      } else if ((i === 0 && j > 0 ) || nums[i - 1] > j) {
        dp[i][j] = false;
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
        // omit number OR substract from sum and see if sub-problem works with new sum and previous number
      }
    }
  }

  return dp[nums.length][sum];
};

module.exports = subsetSum;


//console.log(subsetSum([25,9,8,2], 10))
//console.log(subsetSum([0,1,2,3], 10))