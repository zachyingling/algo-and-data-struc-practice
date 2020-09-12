// Radix Sort

// Big O [n being the nums.length and k being the number of digits in max digits]
// Time Complexity - O(nk)
// Space Complexity - O(n + k)

// Sorts an array of numbers by the length of numbers
// and numbers in the same length category iteratively.
// 1(single digit), then 10(double digit), then 100, etc.
// If there are more than value with identical digits then 
// it would be compared by values

function radixSort(nums){
  // find the most amount of digits in the biggest value of the nums array
  let maxDigitCount = mostDigits(nums);
  
  // iterate from 0 to the most amount of digits in the num array
  for(let k = 0; k < maxDigitCount; k++){
    // create one big array that is hold 10 subarrays
    // which in return will create 10 separate empty (for now) buckets
    let digitBuckets = Array.from({length: 10}, () => []);
    // loop through each index of the nums array
    for(let i = 0; i < nums.length; i++){
      // go to the nums[i] index and get the digit at the k position of the value
      // (nums[i] = 323; k = 1; what will be returned from getDigit is 2)
      let digit = getDigit(nums[i],k);
      // (nums[i] = 323; k = 1; what will be returned from getDigit is 2)
      // push value 323 into bucket 2 out of the 10 buckets
      digitBuckets[digit].push(nums[i]);
    }
    // its squeezes or concatenates all of the sub arrays into one big array (nums)
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// Assume base 10 numbers for the algorithm I wrote
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Pass in base 10 digit number
function digitCount(num){
  if (num === 0) return 1;
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
console.log("getDigit function: " + getDigit(7323, 2));

// if the parameter is 0 return 1
// else return
// base 10 logarithm of parameter
// then remove the decimals and add one to the number being returned
console.log("digitCount function: " + digitCount(642));

// returns the number of digits in the largest number in the list
console.log("mostDigits function: " + mostDigits([4,2,743,12,523461,7653121]));

console.log(radixSort([89,54,4,2,743,12,523461,7653121]));