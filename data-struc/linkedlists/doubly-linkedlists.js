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
}