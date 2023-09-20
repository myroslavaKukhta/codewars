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