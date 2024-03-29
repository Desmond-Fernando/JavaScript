//Function Expression
var canada = () => {
  console.log('Cold');
};

//Function Declaration
function sriLanka() {
  console.log('warm');
}

// Function Invocation/Call/Execution
canada();
sriLanka();

// Special Arguments object
function marry(person1, person2) {
  console.log('arguments', arguments); // implecitly avaialble
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

function marry2(...agrs) {
  console.log('arguments', arguments); // implecitly avaialble
  console.log(Array.from(arguments));
  return `${agrs[0]} is now married to ${agrs[0]}`;
}
marry('Sano', 'Des');

//Variable Environement (Per each execution context)
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one(); // 2. New execution context is created on top of the stack.

//Exection conetext / call stack

//two() -- undefined for isValid
//one() -- true for isValid
//global() -- false for isValid, one and two vaibles to hold functions
