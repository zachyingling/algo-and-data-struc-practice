// Frequency Counter Challenge

// Write a function to determine if the second string is an anagram of the
// first. An anagram is a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, form from iceman.

function validAnagram(str1, str2){
  if(str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let i = 0; i < str1.length; i++){
    //  | this sets the property in the object to be the character in the string at value i
    //  \/                                  \/ this sets the value of the property to itself or 0 [if doesn't exist] then increment
    frequencyCounter1[str1.charAt(i)] = (frequencyCounter1[str1.charAt(i)] || 0) + 1;
  }
  for(let i = 0; i < str2.length; i++){
    frequencyCounter2[str2.charAt(i)] = (frequencyCounter2[str2.charAt(i)] || 0) + 1;
  }
  for(let property in frequencyCounter1){
    if(frequencyCounter1[property] !== frequencyCounter2[property]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true