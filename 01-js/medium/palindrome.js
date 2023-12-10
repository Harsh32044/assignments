/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let tempStr = str.toLowerCase().replace(/[^\w\s\']|_|\W/g, "")
  for (let i = 0; i < tempStr.length / 2 ; i++) {
    if (tempStr[i] != tempStr[tempStr.length - i -1]){
      return false;
    }
  }
  return true;
}


module.exports = isPalindrome;
