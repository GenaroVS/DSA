/*
You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.
*/

/**
 * @param {number} N
 * @return {number}
 */
const nQueens = (N, board = []) => { // Index is row, value is col
  if (N === board.length) return 1;
  var count = 0;

  for (var i = 0; i < N; i++) {
    board.push(i);

    if (isValidBoard(board)) {
      count += nQueens(N, board);
    }
    board.pop();
  }

  return count;
};

const isValidBoard = (board) => {
  var curRow = board.length - 1;
  var curCol = board[board.length - 1];

  for (var i = board.length - 2; i >= 0; i--) {
    var colDiff = Math.abs(curCol - board[i]);
    var rowDiff = Math.abs(curRow - i);
    if (diff === 0 || colDiff === rowDiff) {
      return false;
    }
  }

  return true;
};