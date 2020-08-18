function collectOddValues(arr){
  let newArr = [];
  
  // if arr is empty return out of function
  if(arr.length === 0) {
      return newArr;
  }
  
  // if first element in array is empty push to empty newArr array
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
  
  // everytime collectOddValues is called newArr will but empty
  // but if you concat the old array and what is returned with the next recursive call
  // at the end of the call stack newArr will be a full array of odd nums
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8]));