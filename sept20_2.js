// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
function testEven(n) {
  if(n % 2 === 0) {
    return true;
  } else return false;
}

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
function stringy(size) {
  let result = '';
  for (let i = 1; i <= size; i++) {
    result += i % 2;
  }
  return result;
}

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more 
// values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
 }

//  Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//  Example:
//  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//  None of the arrays will be empty, so you don't have to worry about that!
 function removeEveryOther(arr){
  const newArr = [];
    for (let i = 0; i < arr.length; i = i + 2) {
      newArr.push(arr[i]);
    }
  return newArr;
}