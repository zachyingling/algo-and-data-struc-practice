// Merge Sort
// Big O
// Time Complexity - O(n log(n)) [Best, Average, and Worse Case]
// Space Complexity - O(n)

// This algorithm sorts an array by dividing a big array into halves using recursion. Then sorted among the halves

// Because you are using recursion and the call stack I have diagram in the directory the help explain the order of 
// operations the call stack goes through.

function mergeSort(mainArray){
  if(mainArray.length <= 1) return mainArray;
  let mid = Math.floor(mainArray.length / 2);
  let left = mergeSort(mainArray.slice(0, mid));
  // the right side is gonna wa
  let right = mergeSort(mainArray.slice(mid));
  return merge(left, right);
}

// function to merge two sorted arrays/single elements
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }

  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results;
}

console.log(mergeSort([1,10,84, 952, 634,50, 100, 101, 921, 2, 14, 99, 100]));