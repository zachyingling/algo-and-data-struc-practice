// Storing Binary Heap in a Array
// [100,19,36,17,12,25,5,9,15,6,11,13,8,1,4]
// For any parent index of an array n .... the left child i stored at 2n+1 .... the right child is at 2n+2
// Same way if you have a child node and want to find its parent
// For any child index of an array n .... (n-1)/2 .... then floor the decimal (get rid of decimal; always round down)

class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
  insert(val){
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp(){
    // starting value of the index of the value we just inserted in the insert method
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      // this finds the parent node of the child
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      // if the child is less than parent stop bubbling; value is in right position
      if(element <= parent) break;
      // else swap the parent and child values and set the idx value to be the
      // index of inserted node to keep being compared in the while loop
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

// [41,39,33,18,27,12]
//  0, 1, 2, 3, 4, 5

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);