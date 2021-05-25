/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

const numOfIslands = (grid) => {
  let count = 0;
  let N = grid.length
  let M = grid[0].length;

  for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        markIsland(grid, i, j, N, M);
        count += 1
      }
    }
  }
  return count;
};

function markIsland(grid, i, j, N, M) {
  if (i < 0 || j < 0 || i >= N || j >= M || grid[i][j] !== '1') {
    return
  };
  grid[i][j] = 2;
  markIsland(grid, i - 1, j, N, M);
  markIsland(grid, i, j - 1, N, M);
  markIsland(grid, i + 1, j, N, M);
  markIsland(grid, i, j + 1, N, M);
}