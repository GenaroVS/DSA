
/**
 * O(N) Time, O(NlogN) if UNSORTED
 * @param {nums[]} SORTED
 * @return {number}
 */
const countUniqVals = (nums) => {
  if (!nums || nums.length === 0) return 0;
  var count = 1;
  var prev = nums[0];

  for (var num of nums) {
    if (num !== prev) {
      prev = num;
      count += 1;
    }
  }

  return count;
};

