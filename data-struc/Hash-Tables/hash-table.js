// Hash Table
// Hash tables are collections of key-value pairs
// Hash tables can find values quickly given a key
// Hash tables can add new key-values quickly
// Hash tables store data in a large array, and work by hashing the keys
// A good hash should be fast distribute keys uniformly, and be deterministic
// Separate chaning and linear probing are two strategies used to deal with two keys that hash to the same index

// Big O 
// Time Complexity
// Insertion - O(1) [Average] O(n) [Worst]
// Deletion - O(1) [Average]
// Access - O(1) [Average]

class HashTable {
  constructor(size=17) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    // hash the key and see what index you will get back
    let index = this._hash(key);
    // if there isnt a value at the index set an array to be at that index
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    // push an array of the key and value into the array at that index. so there will be nested arrays
    this.keyMap[index].push([key, value]);
  }
  get(key){
    // hash the key and see what index you will get back
    let index = this._hash(key);
    // if there is a value at the index hashed
    if(this.keyMap[index]){
      // loop through every array in the index hashed
      for(let i = 0; i < this.keyMap[index].length; i++){
        // if the key matches the key in the index
        if(this.keyMap[index][i][0] === key) {
          // return the value
          return this.keyMap[index][i][1]
        }
      }
    }
    // if no value at the index or if the value isnt found in the indeces then return undefined
    return undefined;
  }
  values(){
    // return this array of values in the hash map
    let valuesArr = [];
    // loop trough every index of the hash table
    for(let i = 0; i < this.keyMap.length; i++){
      // if there is a value in the index of the hash table
      if(this.keyMap[i]){
        // loop through the subarray at this specific index of the big array
        for(let j = 0; j < this.keyMap[i].length; j++){
          // this if conditional makes sure that the value isnt duplicated in valuesArr
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys(){
    // return this array of values in the hash map
    let keysArr = [];
    // loop trough every index of the hash table
    for(let i = 0; i < this.keyMap.length; i++){
      // if there is a value in the index of the hash table
      if(this.keyMap[i]){
        // loop through the subarray at this specific index of the big array
        for(let j = 0; j < this.keyMap[i].length; j++){
          // this if conditional makes sure that the value isnt duplicated in valuesArr
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(5);
ht.set("maroon","#800000");
ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("violet","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
console.log(ht.get("maroon")); // #800000
console.log(ht.get("nope")); // undefined
console.log(ht);
console.log(ht.values());
console.log(ht.keys());