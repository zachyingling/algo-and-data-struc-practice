// second recursive function
function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

// gonna console.log() the sum range of the value argument down to 1
// 4 + 3 + 2 + 1 = 10 [always will break out when i hits 1]
// 6 + 5 + 4 + 3 + 2 + 1 = 21
console.log(sumRange(6));