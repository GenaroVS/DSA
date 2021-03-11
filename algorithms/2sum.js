/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const twoSum = (nums, k) => {
  var map = {};

  for (var i = 0; i < nums.length; i++) {
    if (map[k - nums[i]]) {
      return true;
    }
    map[nums[i]] = true;
  }

  return false;
}

console.log(twoSum([10,15,3,7], 17)); //true
console.log(twoSum([10,15,3,8], 17)); //false