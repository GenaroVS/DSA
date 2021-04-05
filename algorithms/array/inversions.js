/*
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].
IF LEFT IS GREATER THAN ANY RIGHT

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].
IF LEFT IS GREATER THAN IMMIDEATE RIGHT

Return true if and only if the number of global inversions is equal to the number of local inversions.
*/

/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isIdealPermutation = (nums) => {
  for (var i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - i) > 1) {
      return false;
    }
  }

  return true;
};

// If number is anywhere other than:
// 1. correct index
// 2. one more than the correct index
// 3. one less than the correct index
// It is gaurenteed that global inversions > local inversions