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