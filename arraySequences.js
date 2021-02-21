// return all sequences of k size
var getNextSequence = (arr, k, idx, n) => {
  if (n - arr[0] === k) return 0;

  // Is current index + 1 > last index - distance between seq index and last seq index
  // seq = [0,x,0], if last 0-index is 5, x can't be greater than 4. (5 - (2 - 1)) => (5 - 1)
  // seq = [x,0,0], if last 0-index is 5, x can't be greater than 3. (5 - (2 - 0)) => (5 - 2);
  if (arr[idx] + 1 > n - 1 - (k - 1 - idx)) {
    getNextSequence(arr, k, idx - 1, n)
  } else {
    arr[idx] += 1;
    for (var i = idx + 1; i < k; i++) {
      arr[i] = arr[i - 1] + 1;
    }
  }
}

var findAllSequences = (arr, k) => {
  var seqPos = new Array(k);
  var sequences = [];

  for (var i = 0; i < k; i++) {
    seqPos[i] = i;
  }

  while(true) {
    var sequence = [];
    for (var i = 0; i < k; i++) {
      sequence.push(arr[seqPos[i]])
    }
    sequences.push(sequence);

    if (getNextSequence(seqPos, k, k - 1, arr.length) === 0) {
      break;
    }
  }

  return sequences;
}

console.log(findAllSequences([1,2,3,4,5,6], 4));