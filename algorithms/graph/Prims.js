// Find minimum spanning tree
const { MinHeap } = require('../../Heap.js');
const WeightedGraph = require('../../WeightedGraph.js');

/**
 * Prim's greedy algorithm
 * @param {object} adj
 * @param {string} start
 * @return {object} Tree representation mapping parent to child
 */
const findMST = (adj, start) => {
  var distQueue = new MinHeap();
  var minDists = {};
  var parent = {};

  for (var v in adj) {
    minDists[v] = Infinity;
    start !== v && distQueue.insertItem({ val: Infinity, vertex: v });
  }
  minDists[start] = 0;
  distQueue.insertItem({ val: 0, vertex: start});

  while (distQueue.size()) {
    var parentVertex = distQueue.removeMin().vertex;

    if (parentVertex || minDists[parentVertex] !== infinity)
      adj[parentVertex].forEach(({ vertex, weight }) => {
        if (weight < minDists[vertex]) {
          minDists[vertex] = weight;
          parent[vertex] = parentVertex;
          distQueue.insertItem({ val: weight, vertex: vertex });
        }
      });
  }

  return parent;
};

const PrimsTest = () => {
  var graph = new WeightedGraph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A','B',2);
  graph.addEdge('A','C',1);
  graph.addEdge('B','E',3);
  graph.addEdge('C','F',1);
  graph.addEdge('C','D',3);
  graph.addEdge('D','E',2);
  graph.addEdge('D','F',2);
  graph.addEdge('F','E',3);
  console.table(findMST(graph.adjacencyList, 'A'));
}

//PrimsTest();