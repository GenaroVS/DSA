const isFilledOut = (board) => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      let val = board[i][j];
      if (!val) {
        return false;
      }
    }
  }
  return true;
};

const findFirstEmpty = (board) => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      let val = board[i][j];
      if (!val && val !== 0) {
        return [i, j]
      }
    }
  }
};

const isValid = (board) => {
  //return rowsValid(board) && colsValid(board) && blocksValid(board);
  if (!rowsValid(board)) return false;
  if (!colsValid(board)) return false;
  if (!blocksValid(board)) return false;
  return true;
};

const rowsValid = (board) => {
  let rowSet = new Set();
  for (var row of board) {
    for (var val of row) {
      if (val && rowSet.has(val)) return false;
      rowSet.add(val);
    }
    rowSet = new Set();
  }
  return true;
};

const colsValid = (board) => {
  let colSet = new Set();
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      let val = board[j][i];
      if (val && colSet.has(val)) return false;
      colSet.add(val);
    }
    colSet = new Set();
  }
  return true;
};

const blocksValid = (board) => {
  let blockSet = new Set();
  for (var i = 0; i < board.length; i += 3) {
    for (var j = 0; j < board[i].length; j += 3) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          let val = board[i + k][j + l];
          if (val && blockSet.has(val)) return false;
          blockSet.add(val);
        }
      }
      blockSet = new Set();
    }
  }
  return true;
};

/**
 * @param {number[][]} board
 * @return {number[][]} Solved board
 */
const solveSudoku = (board) => {

  if (isFilledOut(board)) return board;

  let [row, col] = findFirstEmpty(board);

  for (var x = 1; x < 10; x++) {
    board[row][col] = x;

    if (isValid(board)) {
      var result = solveSudoku(board);
      if (isFilledOut(result)) {
        return result;
      }
    }

    board[row][col] = null;
  }
  return board;
};

let board = [
  [null, null, null, 9, null, null, 4, 8, null],
  [null, null, null, 8, 3, null, null, 1, 2],
  [null, null, null, 4, 2, null, 6, null, 7],
  [null, 7, null, null, 6, null, null, 4, null],
  [null, null, 5, null, 7, null, 8, null, null],
  [null, 8, null, null, 9, null, null, 2, null],
  [4, null, 9, null, 1, 2, null, null, null],
  [8, 5, null, null, 4, 3, null, null, null],
  [null, 3, 1, null, null, 9, null, null, null]
];

console.table(solveSudoku(board));



