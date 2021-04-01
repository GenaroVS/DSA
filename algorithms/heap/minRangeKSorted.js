/**
 * You have k lists of sorted integers in non-decreasing order.
 * Find the smallest range that includes at least one number from each of the k lists.
 */

/**
 * @param {number[][]} nums
 * @return {tuple}
 */
var smallestRange = function(nums) {
  var heap = new MinHeap();
  var max = null;
  var result = []

  for (var i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i][0]);
    heap.insertItem({
      val: nums[i][0],
      listIdx: i,
      idx: 0
    })
  }

  result = [heap.storage[0].val, max];

  while (true) {
    var {val, listIdx, idx} = heap.removeMin();
    if (max - val < result[1] - result[0]) {
      result = [val, max];
    }

    if (idx >= nums[listIdx].length) {
      break;
    }

    var nextVal = nums[listIdx][idx + 1];
    max = Math.max(max, nextVal);
    heap.insertItem({
      val: nextVal,
      listIdx: listIdx,
      idx: idx + 1
    })
  }

  return result;
};
