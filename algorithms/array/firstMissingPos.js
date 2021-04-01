/**
 * Given an unsorted integer array nums, find the smallest missing positive integer.
 * O(n) Time
 * O(1) Space
 * @param {number[]}
 * @return {number}
 */

const firstMissingPositive = (nums) => {
  var n = nums.length;
  // Answer can only be 1 <= x <= n
  // Change all negatives and nums > than length to special number (n + 1).
  for (var i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }
  // Change position(idx) of each number to negative. If num = 1, index 0 will be negative.
  for (var i = 0; i < n; i++) {
    var idx = Math.abs(nums[i]) - 1;
    if (idx >= n) {
      continue
    }

    if (nums[idx] > 0) { // skip if already negative (for duplicates)
      nums[idx] *= -1;
    }
  }
  // if number is not negative, you know you didn't encounter it in the previous loop.
  for (var i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;

}