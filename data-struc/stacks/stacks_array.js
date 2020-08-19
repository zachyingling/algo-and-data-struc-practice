// a stack uses LIFO adding and removing
// Last in and First out
// think of a stack of plates; every new plate is on top of stack
// every plate being removed is being removed from the top aswell

let stack = [];

// these two methods can act as a stack but using an array
// think of the array but turned 90 degrees counter clockwise
// data pushed to top of array
// data popped from top of array
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();

// or the stack can be used in this way where if you are adding to the bottom/beginning of the array
// you can remove the last thing added by using shift rather than pop
// less efficient than push and pop; because whenever you unshift and shift you have to
// reindex every index in the array
stack.unshift("amazon");
stack.unshift("ebay");
stack.shift();