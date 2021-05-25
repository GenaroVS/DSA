/* Daily Problem #75
Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

const longestIncrSeq = (nums) => {
  if (nums.length === 1) return 1;
  let maxLength = 0;
  let dp = Array(nums.length).fill(1);

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  for (var count of dp) {
    maxLength = Math.max(count, maxLength);
  }

  return maxLength;
};

let nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log(longestIncrSeq(nums)) // 6: 0,2,6,9,11,15