let numArr = [29, 10, 22, 1, 989, 21, 23, 2];

// sorting algorithm that as it iterates, it 'bubbles' the largest values to the top/end of array

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

console.log(numArr);
let sortedArr = bubbleSort(numArr);
console.log(sortedArr);