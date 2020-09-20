// Divide and Conquer

// This pattern involves dividing a data set into smaller chunks and then
// repeating a process with a subset of data. This pattern can tremendously
// decrease time complexity. 

// Given a sorted array of integers, write a function called search, that
// accepts a value and returns the index where the value passed to the function
// is located. If the value is not found, return -1.

// Naive solution
// Time Complexity - O(n)
function search(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}
console.log(search([-2,0,2,4,5,6,7,8], 6)); // 5

// Refactored Solution [Binary Search]
// Time Complexity - O(log n)
function searchRefactored(arr, val){
  let min = 0;
  let max = arr.length - 1;

  while(min <= max){
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if(currentElement < val){
      min = middle + 1;
    } else if(currentElement > val){
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(searchRefactored([-2,0,2,4,5,6,7,8], 6)); // 5
