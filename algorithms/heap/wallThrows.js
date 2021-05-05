// DevRevolution Question
const { MinHeap, MaxHeap } = require('../../Heap.js');

const minmaxThrows = (field) => {
  const N = field.length;
  const M = field[0].length;
  var minCount = 0;
  var maxCount = 0;
  var rowsFilled = 0;
  var startingFilled = 0;
  var maxWalls = new MaxHeap();
  var minWalls = new MinHeap();

  for (var i = 0; i < field.length; i++) {
    let count = 0;
    for (var j = 0; j < field[0].length; j++) {
      if (field[i][j] === '#') break;
      count += 1;
    }

    if (count !== 0) {
      minWalls.insertItem({ val: M - count, row: i });
      maxWalls.insertItem({ val: M - count, row: i });
    } else {
      startingFilled += 1;
    }
  }

  rowsFilled = startingFilled;
  while (rowsFilled < N) {
    let maxWall = maxWalls.getMax();
    let rowToAdd = throwBallMax(field, maxWall.row, M - maxWall.val);
    minCount += 1;
    if (rowToAdd === maxWall.row) maxWalls.removeMax();
    maxWalls.insertItem({ val: maxWall.val + 1 , row: rowToAdd });

    if (maxWalls.getMax().val === N) {
      rowsFilled += 1;
      maxWalls.removeMax();
    }
  }

  rowsFilled = startingFilled;
  while (rowsFilled < N) {
    let minWall = minWalls.removeMin();
    let rowToAdd = throwBallMin(field, minWall.row, M - minWall.val);
    maxCount += 1;
    minWalls.insertItem({ val: minWall.val + 1 , row: rowToAdd });

    if (minWall.val + 1 === N) rowsFilled += 1;
  }

  return [minCount, maxCount];
};

function throwBallMax (field, row, wallIdx) {
  for (var i = row; i < field.length; i++) {
    if (field[i][wallIdx - 1] === '#' || field[i][wallIdx - 1] === 'X') {
      field[i - 1][wallIdx - 1] = 'X';
      return i - 1;
    } else if (i === field.length - 1) {
      field[i][wallIdx - 1] = 'X';
      return i;
    }
  }
}

function throwBallMin (field, row, wallIdx) {
  for (var i = row; i < field.length; i++) {
    if (field[i][wallIdx - 1] === '#' || field[i][wallIdx - 1] === 'O') {
      field[i - 1][wallIdx - 1] = 'O';
      return i - 1;
    } else if (i === field.length - 1) {
      field[i][wallIdx - 1] = 'O';
      return i;
    }
  }
}

var field1 = [
  ['.', '#', '.'],
  ['#', '.', '.'],
  ['.', '.', '.']
];

var field2 = [
  ['.', '#', '#'],
  ['.', '.', '#'],
  ['.', '.', '.']
];

var field3 = [
  ['#', '#', '#'],
  ['.', '.', '#'],
  ['.', '.', '.']
];

console.log(minmaxThrows(field1));
console.log(minmaxThrows(field2));
console.log(minmaxThrows(field3));
