/*
On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).
*/

const calcCombos = (num) => num * (num - 1) / 2;

const numOfBishopCollisions = (bishops) => {
  let numOfPairs = 0;
  let diagCounts = {};


  for (var bishop of bishops) {
    let [row, col] = bishop;
    if (row === 0) {
      diagCounts[row] = diagCounts[row] + 1 || 1;
    } else {
      diagCounts[row + col] = diagCounts[row + col] + 1 || 1;
      diagCounts[col - row] = diagCounts[col - row] + 1 || 1;
    }
  }

  for (var diag in diagCounts) {
    numOfPairs += calcCombos(diagCounts[diag]);
  }

  return numOfPairs;
};

let bishops = [
  [0, 0],
  [1, 2],
  [2, 2],
  [4, 0]
];

let bishops2 = [
  [0, 0],
  [1, 2],
  [2, 2],
  [4, 0],
  [4, 4]
];

console.log(numOfBishopCollisions(bishops)); // 2: (0,0) - (2,2), (2,2) - (4,0)
console.log(numOfBishopCollisions(bishops2)); // 4: (0,0) - (2,2), (0,0) - (4,4), (2,2) - (4,4), (2,2) - (4, 0)