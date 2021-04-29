/**
 * Find maximum sum of subarray in array nums
 * O(n) Time
 * o(1) Space
 * @param {array} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
  var max = Number.MIN_SAFE_INTEGER;
  var sum = 0;

  for (var num of nums) {
    // If the number itself is greater than the running sum, assign sum to the number
    sum = Math.max(sum + num, num);
    // Check if this sum is greater than the max sum
    max = Math.max(sum, max);
  }

  return max;
};

console.log(maxSubArray([34, -50, 42, 14, -5, 86])); // 137: 42 + 14 + -5 + 86