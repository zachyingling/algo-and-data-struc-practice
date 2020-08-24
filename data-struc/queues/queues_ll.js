// Every element in the queue is a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Adding to the end of queue
// Removing from the beginning of queue
// if inversed it would be less efficient because removing from the end is O(n) rather than O(1)

// Big O - Queues
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

// FIFO Data Structure
// Useful in processing tasks
// Foundational for more complex data structures
// Waste if the insertion and removal is not O(1)

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // adding
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // removing
  dequeue(){
    if(!this.first) return null;
    let tempFirst = this.first;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return tempFirst.val;
  }
}

let q = new Queue;

console.log(q.enqueue("first"));
console.log(q.enqueue("second"));
console.log(q.enqueue("third"));

console.log(q.dequeue());
console.log(q);
