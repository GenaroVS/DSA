var quickSort = (arr, low, high) => {
  if (low < high) {
    var pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
};

var swap = (arr, idx1, idx2) => {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}


var partition = (arr, low, high) => {
  var pivot = arr[high];
  var i = low - 1;

  for (var j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

var arr = [5,1,4,3,2];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
