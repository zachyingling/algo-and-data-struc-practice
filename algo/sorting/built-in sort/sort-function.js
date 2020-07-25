let numArr = [12, 21, 1, 0, 4];
let stringArr = ["Zach", "Javascript", "Code", "Games"];

// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// by default it is able to sort by the first letter in a string and the first digit in a number
console.log(numArr.sort());
console.log(stringArr.sort());

// sort function takes optional comparator function taking two elements from the arr (a and b) \/
// if the function returns a negative number, a element is before b
// if the function returns a positive number, b element is before a
// if the function returns 0, they are the same according to the sort function

// this now sorts the numbers by value rather than converting each number to string then comparing first digit in the number
console.log(numArr.sort((num1, num2) =>{
    return num1 - num2;
  }
));

// here you are now able to sort the strings by length
console.log(stringArr.sort((string1, string2) => {
  return string1.length - string2.length;
}));



// you are able to reverse the sort aswell
console.log(numArr.sort((num1, num2) =>{
  return num2 - num1;
}
));

console.log(stringArr.sort((string1, string2) => {
  return string2.length - string1.length;
}));