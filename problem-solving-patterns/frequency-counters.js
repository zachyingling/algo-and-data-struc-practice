// Problem solving pattern where it uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(n^2) operations with arrays/string

// Write a function which accepts two arrays. The function should return true if
// every value in the array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

// Naive Solution
// Uses nested loops
// Time Complexity - O(n^2)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex,1);
  }
  return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));


// Refactored Solution
// Uses objects as frequency counters
// Time complexity - O(n)
function sameRefactored(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // 2 for of loops to have two objects that have the property name be the value from the array
  // and the property value be the frequency that value has occurred
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;       
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
    // tests if the key squared is in the second object
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    // tests if the values correspond
    // (ex. if there are two 2s there needs to be two 4s)
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  // if you iterated through the whole object 
  // and you never returned false the
  // arrays match and return true
  return true;
}

console.log(sameRefactored([1,2,3,2,5], [9,1,4,4,25]));
console.log(sameRefactored([1,2,3,2,5], [9,1,4,4,11]));