var merge = function(arr, start, mid, end) {
  var merged = [], i = start, j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      merged.push(arr[i])
      i++;
    } else {
      merged.push(arr[j]);
      j++;
    }
  }

  // add elements left in the first interval
  while (i <= mid) {
    merged.push(arr[i]);
    i++;
  }

  // add elements left in the second interval
  while(j <= end) {
    merged.push(arr[j]);
    j++;
  }

  // copy temp to original interval
  for(i = start; i <= end; i++) {
    arr[i] = merged[i - start]
  }
};

var mergeSort = (arr, start, end) => {
  if(start < end) {
    var mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

var arr = [5,4,1,3,2];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);