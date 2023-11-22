// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. 
// The first parameter, employed, is true whenever you are employed and the second parameter, 
// vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation 
// (because these are the circumstances under which you need to set an alarm). 
// It should return false otherwise. 

function setAlarm(employed, vacation) {
  if (employed === true && vacation === true) {
    return false;
  }
  if (employed === true && vacation === false) {
    return true;
  }
  if (employed === false && vacation === true) {
    return false;
  }
  if (employed === false && vacation === false) {
    return false;
  }
}


// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, 
function findNeedle(haystack) {
  let needle = haystack.indexOf("needle");
  return "found the needle at position "+ needle;
}


// A hero is on his way to the castle to complete his mission. However,
// he's been told that the castle is surrounded with a couple of powerful 
// dragons! each dragon takes 2 bullets to be defeated, 
// our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and 
// move forward to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

function hero(bullets, dragons){
  return bullets >= dragons * 2 ? true : false;
  }

  // Implement a function which convert the given boolean value into its string representation.
  function booleanToString(b){
    return b === true ? "true" : "false";
  }

  // In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the 
  // "Exclusive Or" (hence the name of this Kata). 
  // The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. 
  function xor(a, b) {
    if (a === true && b === true) {
    return false;
  }
    if (a === false && b === false) {
    return false;
      } else return true;
    }