
/**
 * Find the smallest path between ALL PAIRS of vertices
 * Doesn't work with UDG with negative edges BUT can detect negative edge cycle for DG
 * O(V^3) Time
 * @param {number[][]} graph represented by matrix with non-edges == infinity
 * @returns {any[]} Path of vertices
 */
const shortestPath = (graph) => { // floyd-warshall
  let dist = [];

  for (let row of graph) {
    let distRow = [];
    for (let num of row) {
      distRow.push(num);
    }
    dist.push(distRow);
  }

  for (let k = 0; k < dist.length; k++) {
    for (let i = 0; i < dist.length; i++) {
      for (let j = 0; j < dist.length; j++) {
        if (i === j ||
            i === k ||
            j === k ||
            dist[i][k] === Infinity ||
            dist[k][j] === Infinity
        ) {
          continue;
        }
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (dist[i][i] < 0) {
      return 'Negative edge weight cycle';
    }
  }

  return dist;
};

// dist of I => J = min(I => J, I => J through K) = min(d[i][j], d[i][k], d[k][j])
// If dist of I => I is LESS THAN 0, then we have negative edge weight cycle