// Sorts arrays and puts the smallest value at the beginning after each iteration
// Big O(n^2)
// better than bubble sort if you want to limit the amount of swaps

function selectionSort(arr){
  // loop over the array
  for(let i = 0; i < arr.length; i++){
    // set minimum value in the array to be the first index from the start
    let minimum = arr[i];
    let tempIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      // compared every other element in the array to be the smallest value
      if(minimum > arr[j]){
        minimum = arr[j];
        tempIndex = j;
      }
    }
    // whenever the loop finished switch the minimum element and the next unsorted element
    let tempValue = arr[i];
    arr[i] = minimum;
    arr[tempIndex] = tempValue;

  }
  return arr;
}

let array = [5, 3, 1, 6, 4, 7];

console.log(selectionSort(array));