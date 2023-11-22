// Complete the solution so that it returns true if it contains any duplicate argument values. 
// Any number of arguments may be passed into the function.
// The array values passed in will only be strings or numbers. The only valid return values are true and false.

function solution(...arr){
  return [...new Set(arr)].length!=arr.length;
 } 
 
//  Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.
 function shortestStepsToNum(num) {
  let steps = 0;
   while (num > 1) {
      num % 2 == 0 ? num /= 2 : num--
      steps++;
   }
   return steps;
}

