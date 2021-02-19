// Assume sorted list
var linearSearch = (arr, target, start) => {
  for (var i = start; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

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