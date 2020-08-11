// Just like SLL but with DLL it can refer to the next val and prev val
// Takes more memory than the SLL; but with more memory usage leaves more flexibility

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
