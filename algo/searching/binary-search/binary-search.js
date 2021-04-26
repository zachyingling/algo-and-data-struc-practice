// Instead of searching each element one by one; this algorithm can eliminate half of the remaining elements at a time
// ONLY works on SORTED arrays
// Big [worst and average] case O(log n) or [best] case O(1)

let states = ["Pennsylvania", "Virginia", "Alaska", "Alabama"];
let statesOrganized = ["Alaska",
"Alabama",
"Arkansas",
"American Samoa",
"Arizona",
"California",
"Colorado",
"Connecticut",
"District of Columbia",
"Delaware",
"Florida",
"Georgia",
"Guam",
"Hawaii",
"Iowa",
"Idaho",
"Illinois",
"Indiana",
"Kansas",
"Kentucky",
"Louisiana",
"Massachusetts",
"Maryland",
"Maine",
"Michigan",
"Minnesota",
"Missouri",
"Mississippi",
"Montana",
"North Carolina",
"North Dakota",
"Nebraska",
"New Hampshire",
"New Jersey",
"New Mexico",
"Nevada",
"New York",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Puerto Rico",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Virginia",
"Virgin Islands",
"Vermont",
"Washington",
"Wisconsin",
"West Virginia",
"Wyoming"];

// Binary Search Algorithm that takes in a value and an arr; if val is in sorted array it returns the index if not found returns -1
function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let flag = false;

  // eventually the while loop will complete no matter what; either the index of
  // the value will be returned; if not the left pointer will equal the right
  // pointer
  while(leftPointer <= rightPointer){
    let middlePointer = Math.trunc((leftPointer + rightPointer) / 2);
    if(arr[middlePointer] === val){
      return middlePointer;
    } else if (arr[middlePointer] < val) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  return -1;
}

console.log(binarySearch(statesOrganized, "Texas"));