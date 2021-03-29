/* A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal. */

/**
 * @param {number[][]} costs
 * @return number
 */
const paintHouses = (costs) => { // RECURSION
  if (!costs || costs.length === 0) return 0;
  var min = Number.MAX_SAFE_INTEGER;

  function recurse(row, prevIdx, total) {
    if (row >= costs.length) {
      min = Math.min(min, total);
      return;
    }

    for (var i = 0; i < costs[row].length; i++) {
      if (i === prevIdx) continue;
      recurse(row + 1, i, total + costs[row][i]);
    }
  }

  recurse(0, null, 0);
  return min;
}

var costs1 = [[2,3,4],[2,4,5],[1,2,7]];
var costs2 = [[2,3,4],[1,4,5],[1,2,7]];
var costs3 = [[2,3,4]];
console.log(paintHouses(costs1)); // 7: 2,4,1
console.log(paintHouses(costs2)); // 6: 3,1,2
console.log(paintHouses(costs3)); // 2

/**
 * O(NK) Time N = num of total costs && K = num of costs per house
 * @param {number[][]} costs
 * @return number
 */
const paintHouses2 = (costs) => { // DYNAMIC PROGRAMMING
  if (!costs || costs.length === 0) return 0;
  var dp = [];
  var result = Number.MAX_SAFE_INTEGER

  for (var i = 0; i < costs.length; i++) {
    dp.push([]);
    for (var j = 0; j < costs[i].length; j++) {
      if (i === 0) {
        dp[i][j] = costs[i][j];
        continue;
      }
      var min = Number.MAX_SAFE_INTEGER;
      for (var k = 0; k < costs[i].length; k++) {
        if (j !== k) {
          min = Math.min(dp[i - 1][k], min);
        }
      }
      dp[i][j] = costs[i][j] + min;
    }
  }

  for (var i = 0; i < dp[0].length; i++) {
    result = Math.min(result, dp[dp.length - 1][i]);
  }

  return result;
}

console.log(paintHouses2(costs1)); // 7: 2,4,1
console.log(paintHouses2(costs2)); // 6: 3,1,2
console.log(paintHouses2(costs3)); // 2
