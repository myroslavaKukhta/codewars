// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

function unusualFive() {
  const str = "hello";
  return str.length;
}

// Given a number n, return the number of positive odd numbers below n
function oddCount(n) {
  return Math.floor(n / 2);
   }

  //  Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
   function problem(x){
    return typeof(x) === 'number' ? x * 50 + 6 : 'Error';
  }