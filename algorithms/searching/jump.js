/**
 * O(n) Time
 * O(1) Space
 * @param {array} arr
 * @param {number} target
 * @param {number} start
 * @return {number} Index of target (-1 if it doesn't exist)
 */
var linearSearch = (arr, target, start) => {
  for (var i = start; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

/**
 * O(√n) Time
 * O(1) Space
 * @param {array} arr
 * @param {number} target
 * @return {number} Index of target (-1 if it doesn't exist)
 */
var jumpSearch = (arr, target) => {
  var incr = Math.floor(Math.sqrt(arr.length));
  var i;

  for (i = 0; i < arr.length; i += incr) {
    if (arr[i] === target) {
      return i;
    }
    if (arr[i] > target) {
      i -= incr;
      return linearSearch(arr, target, i);
    }
  }

  i -= incr;
  return linearSearch(arr, target, i);
}

var arr = [1,2,3,4,5];
console.log(jumpSearch(arr, 5));
console.log(jumpSearch(arr, 6));

module.exports = jumpSearch;