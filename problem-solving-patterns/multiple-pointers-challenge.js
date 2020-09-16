// Multiple Pointers Challenge

// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)
function countUniqueValues(arr){
  let left = 0;
  let right = 1;
  while(right <= arr.length){
    if(arr[left] === arr[right]){
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left;
}

console.log(countUniqueValues([-4,-2,0,1,2,3,6,7])); // 8
console.log(countUniqueValues([0,0,0,1,1,2,3,4,4,4])); // 5