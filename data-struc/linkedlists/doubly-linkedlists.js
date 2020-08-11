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
}

let dll = new DoublyLinkedList;
dll.push("first");
dll.push("second");
dll.push("third");
console.log(dll);