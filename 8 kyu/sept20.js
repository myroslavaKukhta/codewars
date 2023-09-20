// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      break;
    case '-':
      return value1 - value2;
      break;
    case '*':
      return value1 * value2;
      break;
    case '/':
      return value1 / value2;
      break;
  }
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).
function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  }
  if (a.length < b.length) {
    return a + b + a;
  }
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. 
// Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
function sumMul(n, m) {
  if (n >= m) return "INVALID";

  let a = 0;
  for (let i = n; i < m; i += n) {
    a += i;
  }
  return a;
}

// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Make sure to round off the result to two decimal points.
// Some useful associations relevant to this kata:
// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

function converter (mpg) {
  let result = (mpg * (1.609344 / 4.54609188));
  return Math.round(parseFloat(result) * 100) / 100;
}


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