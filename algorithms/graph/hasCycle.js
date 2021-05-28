
/**
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

/**
 * @param {object} adjacencyList Adjacency list representation of graph
 * @param {number} vertices number of vertices
 * @returns
 */
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

/**
 * Optimized hasCycle using disjoin set with path compression FIND and UNION by rank.
 * @param {vertices[]} edges
 * @return {boolean}
 */
const hasCycleDisjointSet = (numVertices, edges) => {
  let sets = Array(numVertices).fill({ parent: -1, rank: 0 }); // Array rep of disjoint set

  for (var [from, to] of edges) {
    let fromParent = find(sets, from);
    let toParent = find(sets, to);
    if (fromParent === toParent) {
      return true;
    }
    union(sets, fromP, toP);
  }
};

/**
 * Find the absolute parent of set with path compression
 * O(log(N))
 * @param {number[]} sets representation with parents array
 * @param {vertex} v vertex
 * @return {vertex} absolute parent
 */
const find = (sets, v) => {
  if (sets[v].parent === -1) {
    return v;
  }
  // repoint to absolute parent and replace local parent
  return sets[v].parent = find(sets, sets[v].parent);
}

/**
 * Union of disjoint sets by rank (optimizing the height of disjoint 'tree')
 * @param {vertex} parent1
 * @param {vertex} parent2
 */
const union = (sets, parent1, parent2) => {
  if (sets[parent1].rank > sets[parent2].rank) {
    sets[parent2].parent = parent1;
  } else if (sets[parent1].rank < sets[parent2].rank) {
    sets[parent1].parent = parent2;
  } else {
    sets[parent1].rank += 1;
    sets[parent2].parent = parent1;
  }
};