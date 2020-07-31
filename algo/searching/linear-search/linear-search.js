// Time complexity [best] O(1) - [average] O(n) - [worst] O(n)

let states = ["Pennsylvania", "Virginia", "Alaska", "Alabama"];
let statesOrganized = ["Alaska", "Alabama", "Pennsylvania", "Virginia"];

// True if includes false if it doesnt
console.log(states.includes("Alaska"));
console.log(states.includes("West Virginia"));

// returns index of element or -1 if not found
console.log(states.indexOf("Alaska"));
console.log(states.indexOf("West Virginia"));

// returns index of element or -1 if not found
function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(states, "Alaska"));
console.log(linearSearch(states, "alaska"));