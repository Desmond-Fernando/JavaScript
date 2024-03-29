// behavour of moving the vaiables or function declarations to the
// top of their respective environments during comlilation phase.

// variables are partially hoisted and
// functiondeclartions are hoisted

console.log('1-----------');
console.log(teddy);
var teddy = 'bear';

function sing() {
  console.log('I singing oh la la la');
}
console.log(sing());

// Hoisting how it work
// makes space in memory

console.log('1-----------');
var teddy = undefined;
function sing() {
  console.log('I singing oh la la la');
}
console.log(teddy);
var teddy = 'bear';
console.log(sing());

//hoisting will happen for var or function keywork only. not for const or let

// This will not really move the code here and there rather during the first pass it will allocate memory to to these functions and valiables (var)

console.log(teddy); // undefined
console.log(sing2()); // TypeError: not a function
console.log(sing2); // undefined as it treats like a variable
console.log(sing()); // Will execute

var teddy = 'bear';

// Function Expression
var sing2 = function () {
  console.log('I singing oh la la la');
};

// Function Declaration
function sing() {
  console.log('I singing oh la la la');
}

var one = 2;
var one = 2;

console.log(one);

// a();
function a() {
  console.log('hi');
}
// a();

function a() {
  console.log('bye');
}
a();

// output for variable one is undefined
//output for function a will be 'bye'

var favouriteFood = 'grapes';

var foodThoughts = function () {
  console.log(`Original favourite food: ${favouriteFood}`);

  var favouriteFood = 'Sushi';

  console.log(`New Favorite Food: ${favouriteFood}`);
};

foodThoughts();

//Output will be
// Original favourite food: undefined
// New Favorite Food: Sushi

// Exercise 4
function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();

  function littleBrother() {
    return 'no me!';
  }
}

console.log(bigBrother()); // What will be returned here?

// output will be
// no me!
