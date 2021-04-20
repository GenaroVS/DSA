/*
 The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules.

 1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
 2. Any live cell with two or three live neighbors lives on to the next generation.
 3. Any live cell with more than three live neighbors dies, as if by over-population.
 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

 The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
 */

/**
 * @param {number[][]} board
 * @return {void}
 */
var gameOfLife = function(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var cell = board[i][j];
      var cellCount = countCells(board, i, j);
      if ((cellCount < 2 || cellCount > 3) && cell === 1) {
        board[i][j] = -1;
      } else if (cellCount === 3 && cell === 0) {
        board[i][j] = 2;
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] > 0) board[i][j] = 1;
      else board[i][j] = 0;
    }
  }
};

function countCells(board, i, j) {
  var M = board.length;
  var N = board[0].length;
  var count = 0;
  for (var k = -1; k <= 1; k++) {
    for (var l = -1; l <= 1; l++) {
      if (k !== 0 && l !== 0) {
        var row = i + k;
        var col = j + l;
        if (
          (row < M && row >= 0) &&
          (col < N && col >= 0) &&
          Math.abs(board[row][col]) === 1
          ) {
          count += 1;
        }
      }
    }
  }

  return count;
}