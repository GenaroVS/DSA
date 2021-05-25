/* Daily Problem #76
You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.
*/

/**
 * @param {string[]} matrix
 * @return {number}
 */
const numColsDeletedToValidateRows = (matrix) => {
  if (matrix.length === 1) return 0;
  let colsToDelete = new Map();

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i + 1] && matrix[i + 1][j] < matrix[i][j]) {
        colsToDelete.set(j, true);
      }
    }
  }

  return colsToDelete.size;
};

var matrix = [
  ['c','b','a'],
  ['d','a','f'],
  ['g','h','i']
];

var matrix2 = [
  ['c','b','a'],
];

var matrix3 = [
  ['z','y','x'],
  ['w','v','u'],
  ['t','s','r']
];

console.log(numColsDeletedToValidateRows(matrix));
console.log(numColsDeletedToValidateRows(matrix2));
console.log(numColsDeletedToValidateRows(matrix3));