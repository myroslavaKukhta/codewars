// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to 
// buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice, in £ (Pounds)), 
// the duty free discount (discount, in percent) and the cost of the holiday (in £).
// For example, if a bottle costs £10 normally and the duty free discount 
// is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, 
// so the answer you return should be 500.
// Another example: if a bottle costs £12 normally and the duty free discount 
// is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, 
// so your answer should be 166 bottles.
// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
  let dutyFreeBottle = normPrice * discount / 100;
  return Math.floor(hol / dutyFreeBottle);
}

// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// The code provided has a method hello which is supposed to show only those 
// attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.
// But it's not working properly.
// Notes
// There are 3 attributes
// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once. 
// If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.
class Dinglemouse {
  constructor() {
    this.obj = {};
  }
  setAge(age) {
    this.obj.age = ` I am ${age}.`;
    return this;
  }
  setSex(sex) {
    this.obj.sex = ` I am ${sex == 'M' ? "male" : "female"}.`;
    return this;
  }
  setName(name) {
    this.obj.name = ` My name is ${name}.`;
    return this;
  }
  hello() {
    return `Hello.${Object.values(this.obj).join('')}`;
  }
}

// Oh no! Timmy hasn't followed instructions very carefully 
// and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. 
// He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}