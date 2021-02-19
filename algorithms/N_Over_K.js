var nOverK = (A, k) => {
  var freq = new Array(k - 1);
  var results = [];

  for (var i = 0; i < k - 1; i++) {
    freq[i] = {val: null, count: 0};
  }

  for (var i = 0; i < A.length; i++) {
    var j;
    for (j = 0; j < k - 1; j++) {
      if (freq[j].val === A[i]) {
        freq[j].count += 1;
        break;
      }
    }

    if (j === k - 1) {
      var l;
      for (l = 0; l < k - 1; l++) {
        if (freq[l].count === 0) {
          freq[l].val = A[i];
          freq[l].count = 1;
          break;
        }
      }

      if (l === k - 1) {
        for (l = 0; l < k - 1; l++) {
          freq[l].count -= 1;
        }
      }
    }
  }

  for (var i = 0; i < k - 1; i++) {
    var count = 0;
    for (var j = 0; j < A.length; j++) {
      if (A[j] === freq[i].val) {
        count++;
      }
    }
    if (count > (A.length / k)) {
      results.push(freq[i].val);
    }
  }

  return results;
};

var arr = [4, 5, 6, 7, 8, 4, 4];
console.log(nOverK(arr, 3));