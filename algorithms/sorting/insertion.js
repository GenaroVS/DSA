/**
 * O(n^2) Time
 * O(1) Space
 * @param {array} arr
 * @return {void}
 */
var insertionSort = (arr) => {
  var n = arr.length;
  for (var i = 1; i < n; i++) {
    var key = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

var arr = [5,4,1,3,2];
insertionSort(arr);
console.log(arr);