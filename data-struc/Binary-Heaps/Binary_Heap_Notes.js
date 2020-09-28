// Binary Heap
// Very similar to a binary search tree but with some different rules
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
// Each parent has at most two child nodes
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
// No implied ordering between sibling; other than parents being a higher value than children

// Max vs Min Binary Heap
// In a max binary heap, the value of each parent node is always greater than its child nodes
// In a min binary heap, the value of each parent node is always less than its child nodes
// In a Max Binary Heap, the parent is greater than the children, but there are no guarantees between sibling nodes
// In a Min Binary Heap, the parent is less than the children, but there are no guarantees between sibling/parent nodes

// Important becuase Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
// Aswell as with graph traversal algorithms

// Big O
// Insertion - O(log n)
// Removal - O(log n)
// Searching - O(n)