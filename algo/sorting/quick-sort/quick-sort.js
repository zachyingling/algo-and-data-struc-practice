// Quick Sort

// Big O
// Time Complexity - O(n log(n)) [best] O(n^2) [worst]
// Space Complexity - O(log n)

// Quick sort is a highly efficient sorting algorithm and is based on
// partitioning of array of data into smaller arrays. A large array is
// partitioned into two arrays one of which holds values smaller than the
// specified value, say pivot, based on which the partition is made and another
// array holds values greater than the pivot value.

// Quicksort partitions an array and then calls itself recursively twice to sort
// the two resulting subarrays. This algorithm is quite efficient for
// large-sized data sets.

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right) { 
    let pivotIndex = pivot(arr, left, right);
    // left
    // in the call stack the left side of the pivot will finish first
    quickSort(arr, left, pivotIndex - 1);
    // right
    // in the call stack the right side of the pivot will finish after the left side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// This function will take the first element of the array as a pivot point then put that element in the correct position
// of the array. So that every element to the left of this pivot is less than itself and everything to the right of the 
// pivot is great than itself
function pivot(arr, start = 0, end = arr.length - 1){
  // ES2015 Syntax Swap Function
  // Takes an array, and two indeces
  // Just swaps the two values at the two given indeces in the same array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start to the swapIndex
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(quickSort([5,2,1,8,4,7,6,3]));