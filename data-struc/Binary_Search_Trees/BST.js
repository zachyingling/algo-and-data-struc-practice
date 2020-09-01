class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// Insert Structure
//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
