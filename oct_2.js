// Americans are odd people: in their buildings, the first floor is actually the 
// ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed,
//  the numbers move down to take their place. In case of above 13, 
// they move down by two because there are two omitted numbers below them.

function getRealFloor(n) {
  if (n <= 0) {
    return n;
    }
  if (n < 13) {
    return n - 1;
  } if (n >= 13) {
        return n - 2;
}
  }

  // In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
  // Note: Both arrays have the same dimensions.
  function getLargerNumbers(a, b) {
    return a.map((c,i,arr) => arr[i] > b[i] ? arr[i]:b[i]);
  }

  // You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
  // The array is either entirely comprised of odd integers or entirely comprised of 
  // even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
  function findOutlier(integers){
    let even = integers.filter(a => a % 2 === 0);
   let odd = integers.filter(a  => a % 2 !== 0);
   return even.length === 1 ? even[0] : odd[0];
 }

//  In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//  Note: the input will not be empty.
 function calculate(str) {
  return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString();
  }


// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
// He wants to keep his old car until he can buy the secondhand one.
// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore 
// this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
  function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if (startPriceOld>=startPriceNew) 
      return [0,startPriceOld-startPriceNew]; 
  let count = 0;
  let money = startPriceOld;
  for (let i = 1; money <= startPriceNew; i++){
    if ( i % 2 === 0)
    {percentLossByMonth += 0.5}
      count++;
      startPriceOld = startPriceOld - (startPriceOld * (percentLossByMonth / 100));
		startPriceNew = startPriceNew - ((startPriceNew * percentLossByMonth) / 100);
		  money = startPriceOld + (savingperMonth * count);
    };
   return [count,Math.round(money - startPriceNew)];
  
}