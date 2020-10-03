// What is a Priority Queue?
// A data structure where each element has a priority.
// Elements with higher priorities are served before elements with lower
// priorities.

// Priority Queue is just an abstract concept. It can be done in many ways.
// Lots of the time priority queues are done using Min Binary Heaps due to speed and simplicity

// A lot like binary heaps but with priority queues you compare the priority
// value in each node, RATHER than comparing the actual value of each element in
// a binary heap

class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    let newNode = new Node(val, priority);
    // add new node to the end of the array
    this.values.push(newNode);
    // put the new pushed value into the correct position in the array
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if(element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
            (swap === null && rightChild.priority < element.priority) || 
            (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Most priority queues the most urgent priority will be lower numbers
let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
console.log(ER);
ER.dequeue();
console.log(ER);