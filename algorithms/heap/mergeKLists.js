const { MinHeap } = require('../heap.js');

/**
 * return a new sorted merged list from K sorted lists, each with size N.
 * O(KNLogK) Time
 * O(K) Space
 * @param {number[][]} lists
 * @return number[]
 */
const mergeKLists = (lists) => {
  var results = [];
  var minHeap = new MinHeap();

  for (var i = 0; i < lists.length; i++) {
    minHeap.insertItem({val: lists[i][0], listIdx: i, idx: 0});
  }

  while (minHeap.storage.length > 0) {
    var min = minHeap.removeMin();
    results.push(min.val);
    if (min.idx + 1 < lists[min.listIdx].length) {
      var node = {
        val: lists[min.listIdx][min.idx + 1],
        listIdx: min.listIdx,
        idx: min.idx + 1
      }
      minHeap.insertItem(node);
    }
  }

  return results;
}

var lists = [[10, 15, 30], [12, 15, 20], [17, 20, 32]];
console.log(mergeKLists(lists)); // 10, 12, 15, 15, 17, 20, 20, 30, 32