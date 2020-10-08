// Weighted Graph
// Attaches a weight to connections of certain indeces
// The only thing that differs from this graph and graph in 'graph-adjacency-list.js' is the different weights added to each edge

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1,vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2,weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B", 4);
graph.addEdge("E", "B", 1);
graph.addEdge("C", "D", 8);
graph.addEdge("B", "D", 7);
graph.addEdge("B", "C", 2);
console.log(graph.adjacencyList);