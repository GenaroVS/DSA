// Used on lists of numbers, usually binary numbers

/*
1. Group numbers by last digit into ten (base ten: 0-9) buckets
2. Put them back in a list while keeping sequential order of buckets
3. Repeat 1 and 2 with ith-last digit K number of times.
   K = max amount of digits in list
   0 <= i <= N
*/

/**
 * O(NK) Time * If all nums are unique, then O(Nlog(N))
 * O(N + K)
 * @param {number[]} nums
 * @returns
 */
const radixSort = (nums) => {
  var maxDigits = Number.MIN_SAFE_INTEGER;

  for (var num of nums) {
    maxDigits = Math.max(maxDigits, countDigits(num));
  }

  for (var i = 0; i < maxDigits; i++) {
    var buckets = Array.from({length: 10}, () => []);

    for (var num of nums) {
      var digit = getDigit(num, i);
      buckets[digit].push(num);
    }

    nums = [].concat(...buckets);
  }

  return nums;
};

function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function countDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

var arr = [50,123,45,3,245];
console.log(radixSort(arr));