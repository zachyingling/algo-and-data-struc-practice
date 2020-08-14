// First recursive function in course
// Recursive Version
function countDown(num){
  // base case exit out of the recursion
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5)

// Iterative Version
// function countDown(num){
//   for(var i = num; i > 0; i--){
//       console.log(i);
//   }
//   console.log("All done!")
// }

