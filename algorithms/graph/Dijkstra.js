const { MinHeap } = require('../../Heap.js');


/**
 * Find the smallest path between two vertices of a weighted graph
 * O(Vlog(V) + Elog(V))
 * @param {any} start
 * @param {any} end
 * @returns {any[]} Path of vertices
 */
const shortestPath = (graph, start, end) => { // Dijkstra's Algorithm
  let minDists = {};
  let parents = {};
  let path = [];
  let distQueue = new MinHeap();

  for (var vertex in graph.adjacencyList) {
    if (start !== vertex) {
      minDists[vertex] = Infinity;
      distQueue.insertItem({val: Infinity, vertex});
    }
    parents[vertex] = null;
  }
  minDists[start] = 0;
  distQueue.insertItem({val: 0, vertex: start})

  while (distQueue.size()) {
    var vertex = distQueue.removeMin().vertex;
    if (vertex === end) {
      return parents;
    };

    if (vertex || distances[vertex] !== Infinity) {
      graph.adjacencyList[vertex].forEach(neighbor => {
        var dist = minDists[vertex] + neighbor.weight;
        if (dist < minDists[neighbor.vertex]) {
          minDists[neighbor.vertex] = dist;
          parents[neighbor.vertex] = vertex;
          distQueue.insertItem({val: dist, vertex: neighbor.vertex})
        }
      });
    }
  }
};