const subsetSum = require('./subsetSum.js');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  var sum = 0;
  for (var num of nums) {
    sum += num;
  }
  if (sum % 2) return false;

  return subsetSum(nums, sum);
};

console.log(canPartition([1,5,11,5]))
console.log(canPartition([1,2,3,5]))