// Just like stack data structures where you just add and remove data 
// EXCEPT
// Queues are FIFO (First In First Out)

let queue = [];

// Adding to the end of the array
queue.push("First");
queue.push("Second");
queue.push("Third");

// Removing from the beginning of the arrray
queue.shift();
queue.shift();
queue.shift();

// This will work like a queue but removing from the beginning is going to talk a longer time
// Removing from the beginning of the array makes every element have to be reindexed

// Adding to beginning of array
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

// Removing from the end of the array
queue.pop();
queue.pop();
queue.pop();

// This will work like a queue again but adding to the beginning of the array will take a longer time
// Adding to the beginning will have to reindex every element in the array