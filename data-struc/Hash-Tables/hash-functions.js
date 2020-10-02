// Simple hash function that works on strings only
// Takes string and array length
// Will return an index in the array

// Problems
// - Only hashes strings
// - Not constant time - linear in key length
// - Could be a little random
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10)); // 0
console.log(hash("cyan", 10)); // 3


// Improved Hash function using prime numbers
// Prime numbers in the hash are helpful in spreading out the keys more uniformly.
// It's also helpful if the array that you're putting values into has a prime length.
// Math is complicated why you use prime numbers in hashing. But using a prime number
// creates less collisions in the hashing.
function improvedHash(key, arrayLen){
  let total = 0;
  let WEIRD_PRIME = 31;
  // loop length of string or 100 if string is longer than 100
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(improvedHash("hello", 13)); // 7
console.log(improvedHash("goodbye", 13)); // 9
console.log(improvedHash("cyan", 13)); // 5 [COLLISION]
console.log(improvedHash("pink", 13)); // 5 [COLLISION]

// Dealing with collisions
// 1. Separate Chaining
//    - With separate chaining, at each index in our array we store values using a more sophisticated data structure (ex. an array or linked list)
//    - This allows us to store multiple key-value pairs at the same index
// 2. Linear Probing
//    - With linear probing, when we find a collision, we search through the array to find the next empty slot
//    - Unlike with separate chaining, this allows us to store a single key-value at each index