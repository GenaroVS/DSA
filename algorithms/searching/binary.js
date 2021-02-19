// Assume sorted list

var binarySearch = (arr, target, start = 0, end = arr.length) => {
  var mid = start + Math.floor((end - start) / 2);

  while (start <= end) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = start + Math.floor((end - start) / 2);
  }

  return -1;
}

var arr = [1,2,3,4,5];
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 6));

module.exports = binarySearch;