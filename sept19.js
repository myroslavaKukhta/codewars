//1description
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
// First argument is an array of numbers and the second is the divisor.

//1solution

function divisibleBy(numbers, divisor) {
  let result = numbers.filter(num => num % divisor === 0);
  return result;
};

//2description
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. 
// The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

//2solution
function generateRange(min, max, step) {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

//3description
// Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

//3solution
function printArray(array) {
  let lapky = "";
  for (let i = 0; i < array.length - 1; i++) {
    lapky += array[i] + ",";
  }
  lapky += array[array.length - 1];
  return lapky;
}

//4description
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.

//4solution
function distinct(a) {
  let uniq = a.filter((el, index) => {
    return a.indexOf(el) === index;
  })
  return uniq;
}
//5description
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.
// Can you help her?
//5solution
function greet(name){
  if(name !== "Johnny") {
    return "Hello, " + `${name}` + "!";
    } else if (name == "Johnny") {
       return "Hello, my love!";
    }
}