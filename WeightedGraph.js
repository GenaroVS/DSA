class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(({ val }) => {
        this.adjacencyList[val] = this.adjacencyList[val].filter(edge => {
          return edge.val !== vertex;
        });
      });
    }
    delete this.adjacencyList[vertex];
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

    this.adjacencyList[v1].push({val:v2, weight})
    this.adjacencyList[v2].push({val:v1, weight})
  }

  /**
   * If directional graph, points from v1, to v2
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
    })
  }
}





