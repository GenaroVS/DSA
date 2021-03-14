/**
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of * all the numbers in the original array except the one at i.
 * @param {number[]} nums
 * @return {number[]}
 */
const productOfRest = (nums) => {
  var dp = [1]

  for (var i = 1; i < nums.length; i++) {
    dp[0] *= nums[i];
  }

  for (var i = 1; i < nums.length; i++) {
    dp.push(dp[i - 1] / nums[i] * nums[i - 1]);
  }

  return dp;
}

console.log(productOfRest([1,2,3,4,5]));
console.log(productOfRest([3,2,1]));