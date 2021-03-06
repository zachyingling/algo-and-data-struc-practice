// Just like SLL but with DLL it can refer to the next val and prev val
// Takes more memory than the SLL; but with more memory usage leaves more flexibility

// Big O - Time Complexity
// Insertion O(1) 
// Removal O(1) better than sll whenever removing from the end
// Searching O(N)
// Access O(N)

// Identical to SLL except there is a .prev pointer to point to previous nodes; makes some tasks easier

// Better than SLL at finding nodes because with connections both ways search can be done in half of the time as SLL
// but takes up more memory because of extra pointer

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    // create new node
    let newNode = new Node(val);
    // if the list is empty; make head and tail this new node
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    // else link the newNode to the tail both ways; being tail's next and newNode's prev
    // then newNode is now the tail
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop(){
    let poppedValue;
    // if the list is empty; else if length 1
    if(!this.head) return undefined;
    if(this.length === 1){
      poppedValue = this.head;
      this.head = null;
      this.tail = null;
    } else {
      // poppedValue is node getting popped
      poppedValue = this.tail;
      // new tail is the node previous to the one getting popped
      this.tail = this.tail.prev;
      // removing connections from any other node from the node getting returned
      poppedValue.prev = null;
      // before this line of code \/; the .next is still the node gettting popped
      this.tail.next = null;
    }

    // decrement length and return popped node
    this.length--;
    return poppedValue;
  }
  shift(){
    // if length is 0
    if(!this.head) return undefined;
    // store the head before removed into a variable
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      // move the new head of the dll to the head node's .next
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    }
    // cut the bonds on the head you are returning to only return one node
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unshift(val){
    let newNode = new Node(val);
    // if this newNode is going to be the only node in the list
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // point current head's .prev to be newNode; point newNode's .next to be current head; set new head to be newNode
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    let foundNode, startingPoint;
    // if the index doesnt exist return null
    if(index < 0 || index >= this.length) return null;
    // if index is at the first half of the list; start from the head
    else if(index <= this.length / 2){
      startingPoint = this.head;
      for(let i = 0; i < index; i++){
        startingPoint = startingPoint.next;
      }
      foundNode = startingPoint;
    } 
    // else if the index is in the second half of the list start from the tail
    else {
      startingPoint = this.tail;
      for(let i = this.length - 1; i > index; i--){
        startingPoint = startingPoint.prev;
      }
      foundNode = startingPoint
    }
    return foundNode;
  }
  set(index, val){
    let foundNode = this.get(index);
    if(!foundNode) return false;
    else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val){
    // return false if index doesnt exist
    if(index < 0 || index > this.length) return false;
    // if the value wants inserted at beginning just use unshift method
    else if(index === 0) return !!this.unshift(val);
    // if the value wants inserted at the end just use push method
    else if(index === this.length) return !!this.push(val);
    else {
      // create a new Node and use get method to find the node at the index before the index the new node will go
      let frontNode = this.get(index - 1);
      let backNode = frontNode.next;
      let newNode = new Node(val);
      // connect front node to new node and back node to new node
      frontNode.next = newNode;
      backNode.prev = newNode;
      // connect newNode to both of the nodes before and after it to keep the list linked
      newNode.prev = frontNode;
      newNode.next = backNode;
      // in the unshift and push methods the length is already incremented in those methods so 
      // \/ keep this line here
      this.length++;
      return true;
    }
  }
  remove(index){
    // if index doesn't exist
    if(index < 0 || index >= this.length) return undefined;
    // if first index wants removed use shift method
    else if(index === 0) return this.shift();
    // if the last index wants removed use pop method
    else if(index === this.length - 1) return this.pop();
    else {
      // find node needing removed
      let removedNode = this.get(index);
      let frontNode = removedNode.prev;
      let backNode = removedNode.next;
      // redirect the connections in the linked list
      frontNode.next = backNode;
      backNode.prev = frontNode;
    
      // remove all connections from the node being removed
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }
  reverse(){
    let temp = null;
    let current = this.head;

    // swap next and prev for all nodes of doubly linked list
    while(current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    // Before changing head and tail, check for the cases like empty list and list with only one node
    if(temp != null) {
      this.tail = this.head;
      this.head = temp.prev;
    }

    return this;
  }
}

let dll = new DoublyLinkedList;
// pushing value to end of the dll
dll.push("first");
dll.push("second");
dll.push("third");
console.log(dll);
dll.push("fourth");
// removing last element in dll
console.log(dll.pop());
console.log(dll);
// removing first element in dll
console.log(dll.shift());
console.log(dll);
// adding a new element to the head or front of the list
console.log(dll.unshift("actual first"));
console.log(dll);
dll.push("fourth");
dll.push("fifth");
console.log(dll);
// returns the node at the 2nd spot of the list
console.log(dll.get(1));
// sets the value of the 2nd spot node to be value of '2nd'
console.log(dll.set(1, "2nd"));
console.log(dll);
// inserts node with val of '4th' at the 4th spot in the list
console.log(dll.insert(3, "actual 4th"));
console.log(dll);
console.log(dll.insert(0, "1st"));
console.log(dll);
// removes node at the second spot or the 1 index
console.log(dll.remove(1));
console.log(dll);
// reverse every element in the list
console.log(dll.reverse());
