// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return array.reduce(function(sum, item) {
    return sum + item
  }, 0) % 2 == 0 ? 'even' : 'odd';
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
  return n % x ===0 && n % y ===0 ? true : false;
}

// Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount(str){
  let count = 0;
for (const char of str) {
  if (char.match(/[a-z]/)) {
    count += 1;
  }
}

return count;
}


// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents.
//  With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
// He wants you to write a simple program telling him if he will be able to fit all the passengers.
function enough(cap, on, wait) {
  if (cap > on + wait) {
    return 0;
  }  else return (on + wait) - cap;
}

// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  return str.toUpperCase();
}