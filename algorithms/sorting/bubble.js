var swap = (arr, idx1, idx2) => {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 * O(n^2) Time
 * O(1) Space
 * @param {array} arr
 * @return {void}
 */
var bubbleSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var swapped = false;
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

var arr = [5,4,1,3,2];
bubbleSort(arr);
console.log(arr);
