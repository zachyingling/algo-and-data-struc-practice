// piece of data - val
//reference to next node - next

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    // if there is no head \/
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if there is a head just make the next node after the tail the new tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length
    this.length++;
    // return the singlylinkedlist \/
    return this;
  }
  pop(){
    // if the linked list is empty return undefined
    if(!this.head) return undefined;
    // if the list only has one node in the list; return the node being popped and set everything to falsey/empty list
    if(this.length === 1){
      let onlyVal = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return onlyVal;
    }
    
    let currentVal = this.head;
    let nextVal = this.head.next;
    // loops through the whole list to find the last node in the list
    while(nextVal.next){
      currentVal = currentVal.next;
      nextVal = nextVal.next;
    }
    // currentVal is the new tail of the linked list
    // console.log(currentVal);
    // nextVal is the node in the list that is getting removed
    // console.log(nextVal);
    // once the last node is found in the while loop; new tail is set to the second to last
    // node; the new tail node's .next is null; and the length is decremented and
    // return the value of the node that was removed

    currentVal.next = null;
    this.tail = currentVal;
    this.length--;

    return nextVal;
  }
  shift(){
    // if there isnt a head so no list return undefined
    if(!this.head) return undefined;
    let currentHead = this.head;
    // Make the new head the node right after the head node
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    // return the head being removed
    return currentHead;
  }
  unshift(val){
    let tempNode = new Node(val);
    // if there isnt a head set new node to be head and tail of list
    if(!this.head){
      this.head = tempNode;
      this.tail = this.head;
    } else {
      // link the new node created to the old head; then set the new node to be the head
      tempNode.next = this.head;
      this.head = tempNode;
    }
    this.length++;
    // return linked list
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    
    let retrivedNode = this.head;
    for(let i = 0; i < index; i++){
      retrivedNode = retrivedNode.next;
    }
    return retrivedNode;
    
  }
}

// This code works but Nodes are used in the linked lists to hold the data; new Nodes hold the data and are able to hold a reference to the next node of data
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
// console.log(first);

var list = new SinglyLinkedList();
// push node to end of list
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
console.log(list);
// pop the last node in list
list.pop();
console.log(list);
// get rid of the first node in list
list.shift();
console.log(list);
// push node to beginning of the list
list.unshift(1);
console.log(list);
// get retrieves the value at the 5th node \/; indeces start at 0 just like arrays
console.log(list.get(4));