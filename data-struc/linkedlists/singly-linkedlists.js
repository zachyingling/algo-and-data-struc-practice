// piece of data - val
// reference to next node - next

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

// Insertion - SLL O(1) which is faster than array
// Removal - SLL depends remove of beginning O(1) or end is O(n)
// Searching - SLL O(n)
// Access - SLL O(n) slower than array

// Better at insertion and deletion compared to arrays
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
    // if the index not in the indeces range return null
    if(index < 0 || index >= this.length) return null;
    
    let retrivedNode = this.head;
    // make this for loop to go node to node till i matches index
    for(let i = 0; i < index; i++){
      retrivedNode = retrivedNode.next;
    }
    // return node that you looked for in the loop
    return retrivedNode;
  }
  set(index, value){
    // use the get function above to find the node that you are looking for
    let changingNode = this.get(index);
    // if it isnt found return false
    if(!changingNode) return false;
    // change the node's val to the value in the parameter
    changingNode.val = value;
    return true;
  }
  insert(index, value){
    // if indeces doesn't exist return false
    if(index < 0 || index > this.length) return false;
    // if you wanna insert at end use push function
    // ! turns what is being returned to a boolean operator; so ! makes the returned function false; then !! turns the returned function true
    if(index === this.length) return !!this.push(value);
    // if you wanna insert at beginning use unshift
    // ! turns what is being returned to a boolean operator; so ! makes the returned function false; then !! turns the returned function true
    if(index === 0) return !!this.unshift(value);
  
    // firstNode is the index before you wanna insert; thirdNode is the index after you wanna insert
    // now you point firstNode to new node created then point new node to thirdNode
    let firstNode = this.get(index - 1);
    let thirdNode = firstNode.next;
    let middleNode = new Node(value);
    middleNode.next = thirdNode;
    firstNode.next = middleNode;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    else if(index === 0) {
      // returns node removed
      return this.shift();
    } else if(index === this.length-1){
      // returns node removed
      return this.pop();
    } else {

      let nodeRemoved = this.get(index)
      let firstNode = this.get(index - 1);
      // point the node in front of the node getting removed to the node after the node getting removed
      firstNode.next = nodeRemoved.next;
      this.length--;
      return nodeRemoved;
    }
  }
  reverse(){
    // switch the head and tail nodes
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    // node variable is the node you are currently working with and prev/next are nodes to the left and right of the node you are working on
    // to save them for next iteration
    for(let i = 0; i < this.length; i++){
      // save the next node for next iteration
      next = node.next;
      // point the current node to the one before it
      node.next = prev;
      // save the node you just worked on for next iteration
      prev = node;
      // save the next node you want to work on for next iteration
      node = next;
    }
    return this;
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
// get function retrieves the value at the 5th node \/; indeces start at 0 just like arrays
console.log(list.get(4));
// set function sets the value of the node at the index you put in; returns true if set correctly; returns false if node wasn't found
console.log(list.set(0, "first"));
console.log(list);
// insert function takes two arguments and first is index that the new node is going to be and second argument is the value of the new node
console.log(list.insert(1, "second"));
console.log(list);
// this function removes a certain node from the list and takes the index that you want removed
console.log("removed node \\/");
console.log(list.remove(1));
console.log(list);
// this function reverses the linked list by switching the head and tail and pointing the data in the linked list in the opposite direction
list.reverse();
console.log(list);