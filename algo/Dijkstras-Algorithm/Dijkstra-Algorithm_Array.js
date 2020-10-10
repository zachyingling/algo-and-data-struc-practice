class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    // Time complexity: O(n log(n))
    // Can maintain sorted structure if using binary heap
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

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
  Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    // object that holds shortest distances to each verteces from the start vertex using vertece's weight
    const distances = {};
    // object that stores the shortest distance from node to node uses letters
    const previous = {};
    let path = [] // to return at end
    let smallest;

    // build up initial state
    for(let vertex in this.adjacencyList){
      // add every value in the adjacency list to the distances object and the priority queue
      // get every value in the priority queue a weight of infinity unless if its the starting value
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      // smallest is going to be the value of the node with the lowest/"maximum" priority
      if(smallest === finish){
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        // break out of while loop and return
        break;
      } 
      // if there is a value in the smallest variable OR if the smallest property in the distances object doesn't have a value of Infinity
      // else go to the top of the while loop and restart 
      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node of smallest
          // "smallest" is the property name in adjacencylist
          // "neighbor" is the index of the array at the property name "smallest" in adjacencylist
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // if the new calculated distance to neighboring node is less than the distance to neighboring node already
          if(candidate < distances[nextNeighbor]){
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();     
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
console.log("graph's list:");
console.log(graph.adjacencyList);
console.log(graph.Dijkstra("A", "E")); // short path is = ["A", "C", "D", "F", "E"]