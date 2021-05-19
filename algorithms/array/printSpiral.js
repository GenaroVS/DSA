/* Daily Problem #65
This problem was asked by Amazon.
Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
*/

const printSpiral = (matrix) => {
  let spiral = [];
  let startOffset = 0;
  let endOffset = 0;
  let N = matrix.length;
  let M = matrix[0].length;

  while (spiral.length < N * M) {
    spiral.pop();
    for (let i = startOffset; i < M - endOffset; i++) {
      spiral.push(matrix[startOffset][i]);
    }
    if (spiral.length === N * M) break;
    spiral.pop();
    for (let i = startOffset; i < N - endOffset; i++) {
      spiral.push(matrix[i][M - endOffset - 1]);
    }
    if (spiral.length === N * M) break;
    spiral.pop();
    for (let i = M - endOffset - 1; i >= startOffset; i--) {
      spiral.push(matrix[N - endOffset - 1][i]);
    }
    if (spiral.length === N * M) break;
    spiral.pop();
    for (let i = N - endOffset - 1; i >= startOffset; i--) {
      spiral.push(matrix[i][startOffset]);
    }
    startOffset += 1;
    endOffset += 1;
  }

  return spiral;
};

let matrix1 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

let matrix2 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15]
];

debugger;
console.table(printSpiral(matrix1));
debugger;
console.table(printSpiral(matrix2));