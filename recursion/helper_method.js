// outer function
function collectOddValues(arr){
    
  let result = [];

  // inner function
  function helper(helperInput){
      // if the inputted arr is empty return out of inner function
      if(helperInput.length === 0) {
          return;
      }
      
      // if the first index of the array is odd; push it to the result arr in the outer function scope
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      // call the inner function in the inner function but look at the same arr but cut of the first index
      helper(helperInput.slice(1))
  }
  
  // this function call will populate the empty result arr
  helper(arr)

  return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));