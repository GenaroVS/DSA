/* Daily Problem #74
Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.
*/

/**
 * @param {number} N
 * @param {number} x
 * @return {number} Number of times x shows in multiplication table
 */
const multiTableFreq = (N, X) => {
  let count = 0;

  for (var i = 1; i <= N; i++) {
    if (i > X) break;
    if (X % i === 0 && X / i >= 1 && X / i <= N) {
      count += 1
    };
  }

  return count;
};

console.log(multiTableFreq(6, 12)); // 4: 4x3, 3x4, 2x6, 6x2
console.log(multiTableFreq(6, 9)); // 1: 3x3
console.log(multiTableFreq(6, 20)); // 2: 4x5, 5x4