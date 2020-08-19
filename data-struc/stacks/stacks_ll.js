// Big O of Stacks
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

// Pushing and Popping is both constant time
// if want to use searching or accessing you should use another data structure

// Stacks are LIFO
// Used for function invocations(call stacks), undo/redo, for history routing(previously visited pages)

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value){
    let newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let tempNode = this.first;
      this.first = newNode
      this.first.next = tempNode;
    }
    // pre increment
    // this returns the current size of the stack
    // rather than the size of stack before incrementing
    return ++this.size;
  }
  pop(){
    if(!this.first) return null;
    let tempVariable = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempVariable.value;
  }
}

let stack = new Stack;

stack.push("first");
stack.push("second");
console.log(stack.push("third"));
console.log(stack);
console.log(stack.pop());
console.log(stack);