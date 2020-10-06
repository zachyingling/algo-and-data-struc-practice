// Graph

// What is a graph?
// A graph data structure consists of a finite (and possibly mutable)
// set of vertices or nodes or points, together with a set of unordered
// pairs of these vertices for an undirected graph or a set of ordered pairs for
// a directed graph.

// Essential Graph Terms
// Vertex - a node
// Edge - connection between nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distanced between vertices

// Storing Graphs
// Adjacency Matrix
//    - Can be stored in a graph with rows and columns with truey/falsey values
//    - - 	A 	B 	C 	D 	E 	F
//      A 	0 	1 	0 	0 	0 	1
//      B 	1 	0 	1 	0 	0 	0
//      C 	0 	1 	0 	1 	0 	0
//      D 	0 	0 	1 	0 	1 	0
//      E 	0 	0 	0 	1 	0 	1
//      F 	1 	0 	0 	0 	1 	0
// Adjacency List
//    - Can be stored in an array with numbers
//        - [
//           [1,5],
//           [0,2],
//           [1,3],
//           [2,4],
//           [3,5],
//           [4,0]
//          ]
//    - Or if using letters/strings can be stored in an object/hashmap
//        - {
//           A: ["B", "F"],
//           B: ["A", "C"],
//           C: ["B", "D"],
//           D: ["C", "E"],
//           E: ["D", "F"],
//           F: ["E", "A"]
//          }

// Differences and Big O for Adjacency Matrix vs. List
// |V| - number of vertices
// |E| - number of edges
// OPERATION 	     ADJACENCY LIST 	    ADJACENCY MATRIX
// Add Vertex 	    O(1) 	​               O(|V^2|)
// Add Edge 	      O(1) 	               O(1)
// Remove Vertex 	  O(|V| + |E|) 	​       O(|V^2|)
// Remove Edge 	    O(|E|) 	             O(1)
// Query 	          O(|V| + |E|) 	       O(1)
// Storage        	O(|V| + |E|) 	​       O(|V^2|)

// Adjacency List
// - Can take up less space (in sparse graphs)
// - Faster toiterate over all edges
// - Can be slower to lookup specific edge

// Adjacency Matrix
// - Takes up more space (in sparse graphs)
// - Slower to iterate over all edges
// - Faster to lookup specific edge

// Recap
// Graphs are collections of vertices connected by edges
// Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
// Graphs can contain weights and directions as well as cycles
// Just like trees, graphs can be traversed using BFS and DFS
// Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*

// Graph Traversal Uses
// - Peer to peer networking
// - Web crawlers
// - Finding "closest" matches/recommendations
// - Shortest path problems
//    = GPS Navigation
//    = Solving mazes
//    = AI (shortest path to win the game)
