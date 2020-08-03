// function that is able to count how many times a pattern or character is in a much longer string
// big o(n^2) - two nested loops

function stringSearch(string, pattern) {
  // string is the long string you are searching though, pattern is the pattern you are looking for in the long string
  // however many times the pattern is used in the string
  let count = 0;

  // used labels so i can just break the inner loop and not break out of both loops
  Loop1:
  for(let i = 0; i < string.length; i++){
    Loop2:
    for(let j = 0; j < pattern.length; j++){
      if(string.charAt(i + j) !== pattern.charAt(j)){
        break Loop2;
      } else if(j === pattern.length - 1){
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch("hahah", "h"));