class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    // if adjacencyList doesn't have a key with the name of the parameter vertex
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2){
    if(this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)) return undefined;
    else if(this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex2].push(vertex1);
    else if(this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex1].push(vertex2);
    else {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2){
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // Depth First Traversal Recursively
  // Accepts starting node
  depthFirstRecursive(start){
    // result is the array getting returned at end
    const result = [];
    // visited is the object that is going to keep track of the visited nodes in the graph
    const visited = {};
    // you have to set this.adjacencyList to a variable because whenever you try and use it in the IIFE the context of this is changed
    // so you would would try and use "this" in the IIFE it wouldn't refer to the Graph Class anymore
    const adjacencyList = this.adjacencyList;

    // IIFE [Immediately Invoked Function Expression] Helper Function
    // Function will be immediately invoked whenever reached
    // Immediately invoked by using the node passed in through the parameter
    // Recursively called using the neighbor of the start node, then neighbor of the neighbor, and so on...
    (function dfs(vertex){
      // if there is no node to pass into dfs helper function
      if(!vertex) return null;
      // make a key in the visited object and set it to true so you won't visit that node in the graph again
      visited[vertex] = true;
      // push the data into the result array
      result.push(vertex);
      // loop through the array at the exact key in the adjacency list
      adjacencyList[vertex].forEach(neighbor => {
        // if the neighbor hasn't been visited
        // recursive invoke the function again using the neighbor vertext and add it to the call stack
        // else the neighbor has been visited ignore the vertex
        if(!visited[neighbor]){
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  // Depth First Traversal Iteratively
  // Accepts starting node
  depthFirstIteratively(start){
    // if start is empty
    if(!start) return [];
    // stack used to manage node's data
    const stack = [start];
    // result is the array getting returned at end
    const result = [];
    // visited is the object that is going to keep track of the visited nodes in the graph
    const visited = {};
    let currentVertex;

    visited[start] = true;
    // loop where there is something in the stack structure
    while(stack.length){
      currentVertex = stack.pop();
      // push the value of the current vertex into the array being returned
      result.push(currentVertex);

      // loop through the array that is at currentVertex key in the adjacencyList
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor);
        } 
      });
    }
    return result;
  }
  breadthFirst(start){
    // if start is empty
    if(!start) return [];

    const queue = [start];
    // result is array being returned
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
      // using shift method instead of pop because it is a queue
      currentVertex = queue.shift();
      // push first item into returned array
      result.push(currentVertex);
      
      // loop the array in the key of the adjacencyList
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          // set the key in the visited object to true so the value wont be put into the result array twice
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
  }
    return result;
  }
}

let g = new Graph();
// addVertex adds a new key to the adjacency list
g.addVertex("Tokyo");
g.addVertex("Texas");
g.addVertex("Pennsylvania");
console.log(g);
// addEdge adds a connection to two verteces
g.addEdge("Tokyo", "Texas");
g.addEdge("Tokyo", "Pennsylvania");
console.log(g);
g.removeEdge("Tokyo", "Texas");
g.removeEdge("asdf", "rocket"); // no error
console.log(g);
g.addVertex("George");
g.addVertex("Alabama");
g.addEdge("Tokyo", "Texas");
g.addEdge("Tokyo", "Pennsylvania");
g.addEdge("Tokyo", "George");
g.addEdge("Tokyo", "Alabama");
console.log(g);
g.addEdge("Texas", "Pennsylvania");
g.removeVertex("Tokyo");
console.log(g);



console.log("\nGraph used for Traversal: ");
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
let graphTraversal = new Graph();
graphTraversal.addVertex("A")
graphTraversal.addVertex("B")
graphTraversal.addVertex("C")
graphTraversal.addVertex("D")
graphTraversal.addVertex("E")
graphTraversal.addVertex("F")
graphTraversal.addEdge("A","B")
graphTraversal.addEdge("A","C")
graphTraversal.addEdge("B","D")
graphTraversal.addEdge("C","E")
graphTraversal.addEdge("D","E")
graphTraversal.addEdge("D","F")
graphTraversal.addEdge("E","F")
console.log(graphTraversal);

// method that returns all of the data in the graph recursively
console.log(graphTraversal.depthFirstRecursive("A"));
// method that returns all of the data in the graph iteratively using a stack
// it is depth first like the other method just with data being returned in a different order
console.log(graphTraversal.depthFirstIteratively("A"));
// method that returns all of the data in the graph iteratively using a queue
// because breadthFirst utilizes a queue structure; the traversal starts at the node passed through and then the starting node's neighbors
// then once you visit the neighbors you then add the neighbor's neighbors to the queue and so on
console.log(graphTraversal.breadthFirst("A"));