const Queue = require('./Queue.js');

class Graph {
  /**
   * @param {string} type UDG | DG
   */
  constructor(type = 'UDG') {
    this.adjacencyList = {};
    this.type = type;
    this.vertices = 0;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.vertices += 1;
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex] && this.type === 'UDG') {
      this.adjacencyList[vertex].forEach(edge => {
        this.adjacencyList[edge] = this.adjacencyList[edge].filter(val => {
          return val !== vertex;
        });
      });
    } else if (this.adjacencyList[vertex] && this.type === 'DG') {
      for (var v in this.adjacencyList) {
        this.adjacencyList[v] = this.adjacencyList[v].filter(val => {
          return val !== vertex;
        });
      }
    }
    delete this.adjacencyList[vertex];
    this.vertices -= 1;
  }

  /**
   * If directional graph, points from v1, to v2
   * @param {any} v1
   * @param {any} v2
   * @returns {void}
   */
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

    if (this.type === 'UDG') this.adjacencyList[v2].push(v1);
    this.adjacencyList[v1].push(v2);
  }

  /**
   * If directional graph, points from v1, to v2
   * @param {any} v1
   * @param {any} v2
   * @returns {void}
   */
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

    if (this.type === 'UDG') {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(val => {
        return val !== v1;
      });
    }

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(val => {
      return val !== v2;
    })
  }

  /**
   * @param {any} start Starting vertex to traverse
   * @returns {any[]}
   */
  dfsRecur(start) {
    var results = [];
    var visited = {};
    var list = this.adjacencyList;

    (function recurse(vertex) {
      if (vertex === null) return;

      results.push(vertex);
      visited[vertex] = true;

      list[vertex].forEach(edge => {
        if (!visited[edge]) return recurse(edge);
      });
    })(start);

    return results;
  }

  /**
   * @param {any} start Starting vertex to traverse
   * @returns {any[]}
   */
  dfsIter(start) {
    var stack = [start];
    var results = [];
    var visited = {};
    visited[start] = true;

    while (stack.length) {
      var vertex = stack.pop();
      results.push(vertex);

      this.adjacencyList[vertex].forEach(edge => {
        if (!visited[edge]) {
          visited[edge] = true;
          stack.push(edge);
        }
      });
    }

    return results;
  }

  /**
   * @param {any} start Starting vertex to traverse
   * @returns {any[]}
   */
  bfs(start) {
    var queue = new Queue();
    queue.enqueue(start);
    var results = [];
    var visited = {};
    visited[start] = true;

    while(queue.size) {
      var vertex = queue.dequeque();
      results.push(vertex);

      this.adjacencyList[vertex].forEach(edge => {
        if (!visited[edge]) {
          visited[edge] = true;
          queue.enqueue(edge);
        }
      });
    }

    return results;
  }

  /**
   * Only works for directed graphs
   * @returns {boolean}
   */
  hasCycle() {
    if (this.type === 'UDG') return null;

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

    var visited = Array(this.vertices).fill(false);
    for (var i = 0; i < this.vertices; i++) {
      visited[i] = true;
      for (var j = 0; j < this.adjacencyList[i].length; j++) {
        if (hasCycleUtil(this.adjacencyList, visited, this.adjacencyList[i][j])) {
          return true;
        }
      }
      visited[i] = false;
    }
    return false;
  }
}

function GraphTest() {
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');

  graph.addEdge('A','B');
  graph.addEdge('A','C');
  graph.addEdge('B','D');
  graph.addEdge('C','E');
  graph.addEdge('D','E');
  graph.addEdge('D','F');
  graph.addEdge('E','F');

  //    A
  //  /   \
  //  B   C
  //  |   |
  //  D - E
  //  \   /
  //    F

  console.log(graph.bfs('A'));
  console.log(graph.dfsRecur('A'));
  console.log(graph.dfsIter('A'));
};





