// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  const sumArr = (acc, num) => acc + (num > 0 ? num : 0);
  return arr.reduce(sumArr, 0);
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num < 0 ? num : num - (num * 2);
 }

//  We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
 function numberToString(num) {
  return num = String(num);
}


// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
  let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] **2;
    }
  return sum;
}


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  return ("" + x).replace(/[0-4]/g,'0').replace(/[5-9]/g,'1');
}