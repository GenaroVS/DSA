// You’re given a read only array of n integers.
// Find out if any integer occurs more than n/k times in the array
// in linear time and constant additional space.

var nOver3 = (A) => {
  var min = A.length / 3;
  var count1 = 0;
  var count2 = 0;
  var first = 0;
  var second = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === first) {
      count1++;
    } else if (A[i] === second) {
      count2++;
    } else if (count1 === 0) {
      first = A[i];
      count1++;
    } else if (count2 === 0) {
      second = A[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === first) {
      count1++;
    }
    if (A[i] === second) {
      count2++;
    }
    if (count1 > min) return first;
    if (count2 > min) return second;
  }

  return -1;
},