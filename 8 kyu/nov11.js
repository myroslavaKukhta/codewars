// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let newString = "";
     for (let i = str.length - 1; i >= 0; i--) {
         newString += str[i];
     }
     return newString;
 }


//  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 function boolToWord( bool ){
  if (bool === true) {
    return "Yes";
  } else return "No";
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr (n, s) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

