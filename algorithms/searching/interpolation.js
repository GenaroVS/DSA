/**
 * Assuming sorted, uniformly distributed list
 * O(log(n)) Time, optimized binary search for uniformly distributed list
 * O(1) Space
 * @param {array} arr
 * @param {number} x
 * @return {number} Index of target (-1 if it doesn't exist)
 */
var interpolationSearch = (arr, x) => {
  var start = 0;
  var end = arr.length - 1;
  var pos = start + ((x - arr[start]) * (end - start) / (arr[end] - arr[start]))
  pos = Math.floor(pos);

  while (start <= end) {
    if (arr[pos] === x) {
      return pos;
    } else if (arr[pos] > x) {
      end = pos - 1;
    } else {
      start = pos + 1;
    }
    pos = start + ((x - arr[start]) * (end - start) / (arr[end] - arr[start]))
    pos = Math.floor(pos);
  }

  return -1;
};

var arr = [1,2,3,4,5];
console.log(interpolationSearch(arr, 5));
console.log(interpolationSearch(arr, 6));

module.exports = interpolationSearch;