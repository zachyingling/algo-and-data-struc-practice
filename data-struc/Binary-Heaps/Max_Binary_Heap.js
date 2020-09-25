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
  extractMax(){
    // returnedValue is the max value of the binary heap
    const returnedValue = this.values[0];
    // the last value in the array
    const endingValue = this.values.pop();
    // conditional to make sure the array isnt empty
    // if it would be empty it wouldn't run this code so the value 
    // getting returned wouldn't be pushed back into the array
    if(this.values.length > 0){
      // set the first value to the value being popped off the end
      this.values[0] = endingValue;
      // sink the value of that got popped off down to the correct position
      this.sinkDown();
    }
    return returnedValue;
  }
  // method that makes the first value be put into correct position
  // if this method wouldn't be called in extractMax() it would leave
  // the binary heap out of position
  sinkDown(){
    let parentIndex = 0;
    const length = this.values.length;
    const element = this.values[0];
    // this while loop runs till swap variable never gets change and stays null
    while(true){
      // these calculations find the children index of the current parent
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChild, rightChild;
      let swap = null;

      // conditonal that makes sure the children index isnt out of bounds of the array
      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex];
        // if the value of the left child is greater than the parent value
        // give swap the value of the left child index so it can be swaped at the end of the while loop
        if(leftChild > element) {
          swap = leftChildIndex;
        }
      }

      // conditonal that makes sure the children index isnt out of bounds of the array
      if(rightChildIndex < length){
        rightChild = this.values[rightChildIndex];
        // two conditionals in one
        // checks if right child is greater than the element and if swap hasn't been touched
        // OR
        // if swap has been changed checks to see if the right child is greater than the left to see which child to follow
        if(
          (swap === null && rightChild > element) || 
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      // breaks out of the while loop if the children are less than the parent
      // so the current value is in the proper position and shouldnt be moved
      if(swap === null) break;
      // if the while loop continues swap values of the current value you are
      // sinking down and whichever child is a greater value (left or right)
      this.values[parentIndex] = this.values[swap];
      this.values[swap] = element;
      parentIndex = swap;
    }
  }
}

// [41,39,33,18,27,12]
//  0, 1, 2, 3, 4, 5

let heap = new MaxBinaryHeap();
// Insert value into binary heap
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
// extract max value of binary heap
// since its a max binary heap it will always be the root of the heap
console.log(heap.extractMax());
console.log(heap);