const isValid = (graph, colors) => {
  let lastColor = colors[colors.length - 1];
  let lastIndex = colors.length - 1;
  let coloredNeighbors = [];

  for (var i = 0; i < graph[lastIndex].length; i++) {
    let hasEdge = graph[lastIndex][i];
    if (hasEdge && i < lastIndex) {
      coloredNeighbors.push(i);
    }
  }

  for (var neighbor of coloredNeighbors) {
    if (colors[neighbor] === lastColor) {
      return false;
    }
  }

  return true;
};

/*
Given an undirected graph represented as an adjacency matrix and an integer k,
write a function to determine whether each vertex in the graph can be colored
such that no two adjacent vertices share the same color using at most k colors.
*/

/**
 * @param {number[][]} graph undirected
 * @param {number[]} k
 * @return {boolean}
 */
const canBeColored = (graph, k, colors = []) => {
  if (colors.length === graph.length) return true;

  for (var i = 1; i <= k; i++) {
    colors.push(i);
    if (isValid(graph, colors)) {
      if (canBeColored(graph, k, colors)) return true;
    }
    colors.pop();
  }
};