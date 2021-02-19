const binarySearch = require('./binary.js');

var exponentialSearch = (arr, target) => {
  if (arr[0] === target) {
    return 0;
  }

  var i = 1;
  var n = arr.length;
  while (i < n && arr[i] < target) {
    i *= 2;
  }

  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
};

var arr = [1,2,3,4,5];
console.log(exponentialSearch(arr, 5));
console.log(exponentialSearch(arr, 6));

module.exports = exponentialSearch;