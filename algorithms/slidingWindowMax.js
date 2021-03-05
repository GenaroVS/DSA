class MaxHeap {
  constructor(arr = null) {
    this.storage = arr || [];
  }

  /**
   * @param {number} i Index of container
   * @param {number} size Size of container
   * @return {void}
   */
  heapify(i, size = this.size()) {
    var largest = i;
    var left = this.leftChild(i);
    var right = this.rightChild(i);

    if (left < size && this.storage[left].val > this.storage[largest].val) {
      largest = left;
    }
    if (right < size && this.storage[right].val > this.storage[largest].val) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(largest, i);
      this.heapify(largest, size);
    }
  }

  /**
   * @param {number} i Move up the tree (opposite of heapify)
   * @return {void}
   */
  bubbleUp(i) {
    var parent = this.parentPos(i);
    while (i > 0 && this.storage[parent].val < this.storage[i].val) {
      this.swap(i, parent);
      i = parent;
      parent = this.parentPos(i);
    }
  }

  /**
   * @return {number}
   */
  removeMax() {
    if (this.size() < 1) return null;
    this.swap(0, this.size() - 1);
    var max = this.storage.pop();
    this.heapify(0);
    return max;
  }

  /**
   * @param {number} value
   * @return {void} Initally adds item
   */
  insertItem(value) {
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  }

  /**
   * @param {number} i
   * @return {number} Parent index of child
   */
  parentPos(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * @param {number} i
   * @return {number} Left child of parent
   */
  leftChild(i) {
    return i * 2 + 1;
  }

  /**
   * @param {number} i
   * @return {number} Right child of parent
   */
  rightChild(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    var temp = this.storage[i];
    this.storage[i] = this.storage[j];
    this.storage[j] = temp;
  }

  size() {
    return this.storage.length;
  }
}


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