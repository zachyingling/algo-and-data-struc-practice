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