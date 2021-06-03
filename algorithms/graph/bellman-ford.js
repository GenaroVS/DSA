/**
 * Find the smallest path between two vertices of a weighted graph
 * Doesn't work with UDG with negative edges BUT can detect negative edge cycle for DG
 * O(Vlog(V) + VE)
 * @param {any} start
 * @param {any} end
 * @returns {any[]} Path of vertices
 */
const shortestPath = (graph, start) => { // bellman-ford's Algorithm
  let parents = {};
  let minDists = {};
  let vertices = 0;
  let updated = false;

  for (var vertex in graph.adjacencyList) {
    minDists[vertex] = Infinity;
    parents[vertex] = null;
    vertices += 1;
  }
  minDists[start] = 0;
  parents[start] = -1;

  for (let x = 1; x <= vertices - 1; x++) {
    updated = false;
    for (let v in graph.adjacencyList) {
      if (minDists[v] !== infinity) {
        graph.adjacencyList[v].forEach(neighbor => {
          let dist = minDists[v] + neighbor.weight
          if (dist < minDists[neighbor.vertex]) {
            updated = true;
            minDists[neighbor.vertex] = dist;
            parents[neighbor.vertex] = v;
          }
        });
      }
    }
    if (!updated) break;
  }
  // cycle and relax changes again
  if (updated) {
    for (let v in graph.adjacencyList) {
      if (minDists[v] !== infinity) {
        graph.adjacencyList[v].forEach(neighbor => {
          let dist = minDists[v] + neighbor.weight
          if (dist < minDists[neighbor.vertex]) {
            return null; // Detected negative cycle
          }
        });
      }
    }
  }
};