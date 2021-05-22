/* Daily Problem #72
In a directed graph, each node is assigned an uppercase letter. We define a path's value as the number of most frequently-occurring letter along that path. For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.

Given a graph with n nodes and m directed edges, return the largest value path of the graph. If the largest value is infinite, then return null.

The graph is represented with a string and an edge list. The i-th character represents the uppercase letter of the i-th node. Each tuple in the edge list (i, j) means there is a directed edge from the i-th node to the j-th node. Self-edges are possible, as well as multi-edges.
 */

/**
 *
 * @param {string} vertices
 * @param {number[][]} edges
 * @return {string}
 */
const getLargestValuePath = (vertices, edges) => {
  let maxVal = 0;
  let maxPath = '';

  function traverse(src, dest, freq = [], localMax = 0, localPath = '') {
    if (src === dest) {
      return;
    }

    let hasEdges = false;
    let vertex = vertices[src];
    freq[vertex] = freq[vertex] + 1 || 1;
    localMax = Math.max(freq[vertex], localMax);
    localPath += vertex;
    for (var edge of edges) {
      if (edge[0] === dest) {
        hasEdges = true;
        traverse(dest, edge[1], freq, localMax, localPath);
      }
    }

    if (!hasEdges && localMax > maxVal) {
      maxVal = localMax;
      maxPath = localPath + vertices[dest];
    }
  }

  for (var edge of edges) {
    traverse(edge[0], edge[1]);
  }

  return maxPath;
};

let vertices = 'ABACA';
let edges = [[0, 1], [0, 2], [2, 3], [3, 4]];
console.log(getLargestValuePath(vertices, edges));

