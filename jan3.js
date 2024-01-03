// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

function  calculateAge (yearOfBirth, yearToCount) {
  const age = yearToCount - yearOfBirth;
  
  if (age === 0) {
    return "You were born this very year!";
  } else if (age > 0) {
    return `You are ${age} year${age !== 1 ? 's' : ''} old.`;
  } else {
    return `You will be born in ${-age} year${-age !== 1 ? 's' : ''}.`;
  }
}


// Invalid Login - Bug Fixing #11
// Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!

// Task
// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

// Preloaded
// You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.
function validate(username, password){
  if (username.includes('||') || username.includes('//') || password.includes('||') || password.includes('//')) {
   return 'Wrong username or password!';
 }

 var database = new Database();
 return database.login(username, password);
}