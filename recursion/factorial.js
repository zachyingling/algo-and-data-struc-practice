// factorial =   [5!] === 5 * 4 * 3 * 2 * 2

// iterative function for factorial
function iterativeFactorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--){
    total *= i;
  }
  return total;
}

console.log(iterativeFactorial(5));

// recursive function for factorial
function recursiveFactorial(num) {
  // base case to break out of this function
  if(num === 1) return 1;
  // this function keeps getting added to the call stack if the num parameter isn't 1
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(5));