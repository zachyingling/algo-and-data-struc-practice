// Radix Sort

// Big O
// Time Complexity - 
// Space Complexity - 

function radixSort(){}

// Assume base 10 numbers for the algorithm I wrote
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Pass in base 10 digit number
function digitCount(num){
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// returns the number of digits in the largest number in the list
function mostDigits(nums){
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++){
    // Math.max returns the highest value of two numbers
    // So, set maxDigits equal to current maxDigits or a value higher than itself
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// You divide the number by 10^i (this case 2)
// Then floor it to get rid of the decimal place
// Then see what the remainder of the number by modulus 10
// (7323 / 100) = 73.23
// Math.floor(73.23) = 73
// 73 % 10 = 3
// So given 7323, the number at the 2nd indeces is 3
console.log(getDigit(7323, 2));

// if the parameter is 0 return 1
// else return
// base 10 logarithm of parameter
// then remove the decimals and add one to the number being returned
console.log(digitCount(642));

// returns the number of digits in the largest number in the list
console.log(mostDigits([4,2,743,12,523461,7653121]));