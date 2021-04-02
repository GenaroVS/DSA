/* You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board. */

/**
 * @param {number[][]} board
 * @param {number[2]} start
 * @param {number[2]} end
 * @return {number}
 */
const shortestPath = (board, start, end) => {
  var minPath = Number.MAX_SAFE_INTEGER;
  var M = board.length;
  var N = board[0].length;

  function recurse(i, j, pathLen) {
    if (j === end[1] && i === end[0]) {
      minPath = Math.min(minPath, pathLen);
      return;
    }
    board[i][j] = true;

    if (i - 1 >= 0 && !board[i - 1][j]) { // GO UP
      recurse(i - 1, j, pathLen + 1, i, j);
    }
    if (i + 1 < M && !board[i + 1][j]) { // GO DOWN
      recurse(i + 1, j, pathLen + 1, i, j);
    }
    if (j - 1 >= 0 && !board[i][j - 1]) { // GO LEFT
      recurse(i, j - 1, pathLen + 1, i, j);
    }
    if (j + 1 < N && !board[i][j + 1]) {// GO RIGHT
      recurse(i, j + 1, pathLen + 1, i, j);
    }

    board[i][j] = false;

  }

  recurse(start[0], start[1], 0);

  return minPath;
};

var board = [
  [false, false, false, false],
  [true, true, false, true],
  [false, false, false, false],
  [false, false, false, false]
];

console.log(shortestPath(board, [3,0], [0,0]));
