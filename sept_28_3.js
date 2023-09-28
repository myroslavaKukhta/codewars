// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  while(n % 10 === 0 && n !== 0) {
     n = n / 10;
   }
   return n;
 }

//  You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//  If it is a square, return its area. If it is a rectangle, return its perimeter.
 const areaOrPerimeter = function(l , w) {
  return l / w === 1 ? l *  w  : l * 2 + w * 2 ;
};

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
function peopleWithAgeDrink(old) {
  if (old < 14){
    return "drink toddy";
  }
   if (old >= 14 && old < 18){
    return "drink coke";
  }
   if (old >= 18 && old < 21){
    return "drink beer";
  }
   if (old >= 21){
    return "drink whisky";
  }
};


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
  const classAverage = classPointsSum / classPoints.length;
  const isBetter = yourPoints > classAverage;
  return isBetter;
}

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
// It is your job to fix the code and get the program working again!
function sayHello(name) {
  return `Hello, ${name}`;
}


// Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
  return string.trim().split(" ");
}