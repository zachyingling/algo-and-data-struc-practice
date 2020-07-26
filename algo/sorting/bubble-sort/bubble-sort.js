let numArr = [29, 10, 22, 1, 989, 21, 23, 2];

// sorting algorithm that as it iterates, it 'bubbles' the largest values to the top/end of array
// Big O(n^2) generally
// But if the array is already nearly sorted it rounds down to Big O(n)

function swap(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// unoptimized
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

// optimized bubble sort; outer loop starts at end of the arr and the inner function uses the outer function's variable i to not do a comparison to the 
// last element in the array because you will be comparing a value and undefined OR a value that has already been compared and proven largest
// noSwaps is also used to optimize the runtime; if a array is nearly sorted the algorithm will have to keep going through the array and prove everthing is
// sorted. BUT if you use the noSwaps variable and nothing gets swapped it will remain true and break out of the for loops
// Most useful with arrays that are already nearly sorted.
function bubbleSortOptimized(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(numArr);
let sortedArr = bubbleSort(numArr);
console.log(sortedArr);
let sortedOptimizedArr = bubbleSortOptimized(numArr);
console.log(sortedOptimizedArr);