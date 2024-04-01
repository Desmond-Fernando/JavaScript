// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// alert(eq); // gives false

const number = 100;
const string = 'Jay';
let obj1 = {
  value: 'a',
};
let obj2 = {
  value: 'b',
};
let obj3 = obj2;

function change(number, string, obj3, obj2) {
  number = number * 10;
  string = 'Pete';
  obj1 = obj2;
  console.log(obj1);
  obj1.value = 'c';
  console.log(obj1);
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // a
console.log(obj1);

// Arguments are Passed by Value

// The parameters, in a function call, are the function's arguments.
// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
// If a function changes an argument's value, it does not change the parameter's original value.
// Changes to arguments are not visible (reflected) outside the function.

// Objects are Passed by Reference

// In JavaScript, object references are values.
// Because of this, objects will behave like they are passed by reference:
// If a function changes an object property, it changes the original value.
// Changes to object properties are visible (reflected) outside the function.
