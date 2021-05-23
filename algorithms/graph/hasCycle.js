
/**
 *
 * @param {object} adjacencyList Adjacency list representation of graph
 * @param {number} vertices number of vertices
 * @returns
 */
const hasCycleDG = (adjacencyList, vertices) => { // FOR DIRECTED GRAPHS
  function hasCycleUtil(adj, visited, vertex) {
    if (visited[vertex]) return true;
    visited[vertex] = true;
    for (var i = 0; i < adj[vertex].length; i++) {
      if (hasCycleUtil(adj, visited, adj[vertex][i])) {
        return true;
      }
    }
    return false;
  }

  var visited = Array(vertices).fill(false);
  for (var i = 0; i < vertices; i++) {
    visited[i] = true;
    for (var j = 0; j < adjacencyList[i].length; j++) {
      if (hasCycleUtil(adjacencyList, visited, adjacencyList[i][j])) {
        return true;
      }
    }
    visited[i] = false;
  }
  return false;
}

const hasCycleUDG = (adjacencyList, vertices) => { // FOR UNDIRECTED GRAPHS USING COLORING
  function hasCycleUtil(adj, visited, v) {
    if (visited[v] === 2) return true;
    visited[v] = 1;

    for (var i = 0; i < adj[v].length; i++) {
      if (visited[v] === 1) visited[v] = 2;
      else if (hasCycleUtil(adj, visited, adj[v][i])) {
        return true;
      }
    }
    return true;
  }

  // 0 = white = Not Visited
  // 1 = gray = visited
  // 2 = black = visted and processed
  var visited = Array(vertices).fill(0);

  for (var i = 0; i < vertices; i++) {
    visited[i] = 1;
    for (var j = 0; j < adjacencyList[i].length; j++) {
      if (hasCycleUtil(adjacencyList, visited, adjacencyList[i][j])) {
        return true;
      }
    }
    visited[i] = 0;
  }
  return false;
};