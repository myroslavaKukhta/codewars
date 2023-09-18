/*1 description
This method, 
which is supposed to return the result of dividing its first argument by its second, 
isn't always returning correct values. Fix it.*/

//solution
const solve = (x, y) => x / y;

//2 description 
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//solution
function paperwork(n, m) {
  let calc = m * n;
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return calc;
  }
}

//3 description 
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//solution
function removeChar(str) {
  return str.slice(1, -1);
}

//4 description 
// Given an array of integers your solution should find the smallest integer
//solution
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 5 description
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//solution
function doubleChar(str) {
  return [...str].map(s => s.repeat(2)).join('');
}
