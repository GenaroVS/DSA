const { MinHeap } = require('./Heap.js');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    this.vertices = 0;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.vertices += 1;
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(neighbor => {
        this.adjacencyList[neighbor.vertex] = this.adjacencyList[neighbor.vertex]
          .filter(neighbor => {
            return neighbor.vertex !== vertex;
          });
      });
    }
    delete this.adjacencyList[vertex];
    this.vertices -= 1;
  }

  /**
   * If directional graph, points from v1, to v2
   * @param {any} v1
   * @param {any} v2
   * @param {number} weight
   * @returns {void}
   */
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

    this.adjacencyList[v1].push({vertex:v2, weight})
    this.adjacencyList[v2].push({vertex:v1, weight})
  }

  /**
   * If directional graph, points from v1, to v2
   * O(ELog(V)) Time
   * O(V) Space
   * @param {any} v1
   * @param {any} v2
   * @returns {void}
   */
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(edge => {
      return edge.val !== v1;
    });
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(edge => {
      return edge.val !== v2;
    });
  }

  /**
   * Dijkstra's Algorithm
   * @param {any} start
   * @param {any} end
   * @returns {any[]} Path of vertices
   */
  shortestPath(start, end) {
    let minDists = {};
    let previous = {};
    let path = [];
    let distQueue = new MinHeap();

    for (var vertex in this.adjacencyList) {
      if (start !== vertex) {
        minDists[vertex] = Infinity;
        distQueue.insertItem({val: Infinity, vertex});
      }
      previous[vertex] = null;
    }
    minDists[start] = 0;
    distQueue.insertItem({val: 0, vertex: start})

    while (distQueue.size()) {
      var vertex = distQueue.removeMin().vertex;
      if (vertex === end) {
        while (vertex) {
          path.push(vertex);
          vertex = previous[vertex];
        }
        break;
      };

      if (vertex || minDists[vertex] !== Infinity) {
        this.adjacencyList[vertex].forEach(neighbor => {
          var dist = minDists[vertex] + neighbor.weight;
          if (dist < minDists[neighbor.vertex]) {
            minDists[neighbor.vertex] = dist;
            previous[neighbor.vertex] = vertex;
            distQueue.insertItem({val: dist, vertex: neighbor.vertex})
          }
        });
      }
    }
    return path.reverse();
  }

  /**
   * Prim's greedy algorithm
   * @return {any[]} Minimum spanning tree
   */
  findMST(start) { // Prim's

  }
};

function WGTest() {
  var graph = new WeightedGraph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A','B',2);
  graph.addEdge('A','C',1);
  graph.addEdge('B','E',2);
  graph.addEdge('C','F',1);
  graph.addEdge('C','D',3);
  graph.addEdge('D','E',2);
  graph.addEdge('D','F',2);
  graph.addEdge('F','E',3);

  console.log(graph.shortestPath('A','E'));
}

//WGTest();

module.exports = WeightedGraph;





