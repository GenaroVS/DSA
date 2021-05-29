const hasCycle = require('./hasCycle');

/**
 * Find the minimum spanning tree (MST)
 * O(ELog(E) + Elog(V))
 * @param {number} V
 * @param {number[][]} edges
 * @return {} Minimum Spanning Tree
 */
const kruskals = (V, edges) => {
  let mst = [];
  let sortedEdges = edges.sort((a, b) => {
    return a.weight - b.weight;
  });

  for (let { src, dest, weight } of sortedEdges) {
    mst.push([src, dest, weight]);
    if (mst.length === V - 1) {
      return mst;
    } else if (hasCycle(V, mst)) {
      mst.pop();
    }
  }

  return null;
};