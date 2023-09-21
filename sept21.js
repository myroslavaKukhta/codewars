

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = "code";
var b = "wa.rs";
var name = a + b;

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
function reverseWords(str) {
  let s = str.trim().split(' ');
  let arr = [];
  let i = s.length;

  while (i > 0) {
    arr.push(s[i - 1]);
    i--;
  }

  return arr.filter(x => x).join(" ");
}


// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), 
// populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  return number * (number % 2 > 0 ? 9 : 8);
}

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. 
// If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. 
// The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.
function cookie(x) {
  let name = '';
  if (typeof x === 'number') name = 'Monica';
  else if (typeof x === 'string') name = 'Zach';
  else name = 'the dog';
  return 'Who ate the last cookie? It was ' + name + '!'
}

//  Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) 
//  before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended 
// (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. 
// The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
// calculate the total cost of the mangoes.
function mango(quantity, price) {
  let freeMango = Math.floor(quantity / 3);
  let total = (quantity - freeMango) * price;
  return total;
}

//   Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main(verb, noun) {
  return verb + noun;
}

//   The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. 
//   They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, 
// the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, 
// return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
  if (sperm.includes('Y') === true)
    return "Congratulations! You're going to have a son.";
  else return "Congratulations! You're going to have a daughter.";
}