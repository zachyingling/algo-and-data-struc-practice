class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Big O of Binary Search Tree
// Insertion - O(log n) - Average
// Searching - O(log n) - Average

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        // create new node
        var newNode = new Node(value);
        // if the tree is empty
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        // current gets updated as the while loop iterates
        var current = this.root;
        while(true){
            // return undefined if the root and value is the same value
            if(value === current.value) return undefined;
            // if value is less than current's value; goes to left side of tree
            if(value < current.value){
                // if the left of the parent is null
                // newNode is child of current
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                // go to the left of the tree
                current = current.left;
            } else {
                // else; go to right side of tree

                // if the right of the parent is null
                // newNode is child of current
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                // go to the right of the tree
                current = current.right;
            }
        }
    }
    find(value){
        // if the tree is empty
        if(this.root === null) return false;
        // current will get updated after each iteration and found in the flag variable
        var current = this.root,
            found = false;
        // while there is a current and found is false
        while(current && !found){
            if(value < current.value){
                // update current to the left side of the current node
                current = current.left;
            } else if(value > current.value){
                // update current to the right side of the current node
                current = current.right;
            } else {
                // change flag variable to true
                found = true;
            }
        }
        // if found stayed false; return undefined
        if(!found) return undefined;
        return current;
    }
    contains(value){
        // if tree is empty
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        // while there is a current and found is false
        while(current && !found){
            if(value < current.value){
                // update current to the left side of the current node
                current = current.left;
            } else if(value > current.value){
                // update current to the right side of the current node
                current = current.right;
            } else {
                // return true out of the method
                return true;
            }
        }
        // if nothing else was returned return false because the value wasnt found
        return false;
    }
    // Breadth First Search

    // Visit the same nodes on the same level 
    // first before the traversal goes to
    // the next level in the search.

    // Utilizes and queue data structure with a 
    // FIFO [First In First Out] approach
    BFS(){
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        // While there is a node in the queue array
        while(queue.length){
           node = queue.shift();
           // add the value of the queued node to the returned array
           data.push(node.value);
           // if there is a left add it to the queue
           if(node.left) queue.push(node.left);
           // if there is a left add it to the queue
           if(node.right) queue.push(node.right);
        }
        // return traversed tree in an array
        return data;
    }
}

// Insert Structure
//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.BFS());
