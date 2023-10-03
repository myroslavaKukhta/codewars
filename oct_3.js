// Return an array, where the first element is the count 
// of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
      return [];
  }
  let array = [0, 0];

  for(let i = 0; i < input.length; i++) {
      if(input[i] <= 0) {
          array[1] += input[i];
    } else {
          array[0] += 1;
    }
  }
  return array;
}

// Timmy & Sarah think they are in love, but around where they live, 
// they will only know once they pick a flower each. If one of 
// the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
  let num;
   let count =0;
   for(i=0;i<A.length;i++){
      num = A[i]
      for(a=0;a,a<A.length;a++){
         if(A[a]===num){
         count++;
         }
    } if(count%2!=0){
         return num;
    }
  }
}

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

multiplicationTable = function(size) {
  let r = []
  for(let i = 1; i<=size; i++){
    let x = []
    for(let j = 1; j<=size; j++){
      x.push(i*j)
    }
    r.push(x)
  }
  return r
}