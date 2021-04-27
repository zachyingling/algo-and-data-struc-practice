// insertion sort
// just like bubble sort. for bubble sort the largest values get bubbled to the end of the array
// for insertion the smallest numbers get pushed to the front

// Big O(n^2)

function insertionSort(arr){
  // every number before i is going to be sorted after every iteration
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    let j;
    debugger;
    // this loop iterates from the element before i and to the beginning of the array
    // and breaks out of the loop when j reaches the end of if the element that j is equal to is greater than currentVal
    for(j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      // this will put currentVal in the position that makes the number sorted
      arr[j+1] = arr[j];
      debugger;
    }
    // Make currentVal the index that got moved
    arr[j + 1] = currentVal;
  }
  return arr;
}

let array = [2, 3, 1, 5, 6, 3, 5];

console.log(insertionSort(array));