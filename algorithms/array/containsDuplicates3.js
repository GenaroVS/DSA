/*
Given an integer array nums and two integers k and t,
return true if there are two distinct indices i and j in the array
such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsDuplicates3 = (nums, k, t) => {
  var buckets = {};

  for (var i = 0; i < nums.length; i++) {
    var bucket = Math.floor(nums[i] / (t + 1));
    if (nums[i] < 0) bucket -= 1;

    if (
      buckets[bucket] ||
      Math.abs(buckets[bucket + 1] - nums[i]) <= t ||
      Math.abs(buckets[bucket - 1] - nums[i]) <= t
      ) {
        return true;
      }

    buckets[bucket] = nums[i];

    if (i >= k) {
      var left = Math.floor(nums[i - k] / (t + 1));
      delete buckets[left];
    }
  }

  return false;
};

var nums = [1,2,3,1];
var nums2 = [1,5,9,1,5,9];
console.log(containsDuplicates3(nums, 3, 0));
console.log(containsDuplicates3(nums2, 2, 3));
