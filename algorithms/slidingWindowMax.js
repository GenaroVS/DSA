const MaxHeap = requier('../heap.js');


/**
 You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

 Return the max sliding window.
 */

/**
 * O(nlogn(k)) Time
 * @param {number[]} nums
 * @return {number[]}
 */
const slidingWindowMax = (nums) => {
  var maxHeap = new MaxHeap();
  var maximums = [];

  // Maxify first window
  for (var i = 0; i < k; i++) {
    var node = {
      val: nums[i],
      idx: i
    }
    maxHeap.insertItem(node);
  }

  maximums.push(maxHeap.storage[0].val);
  var end = k;

  while (end < nums.length) {
    // Remove maximums that are outside of window
    while (maxHeap.storage[0] && maxHeap.storage[0].idx <= end - k) {
      maxHeap.removeMax();
    }
    // Insert new right-most value and add new max to 'maximums' list
    maxHeap.insertItem({val: nums[end], idx: end});
    maximums.push(maxHeap.storage[0].val)
    end += 1;
  }

  return maximums;
}