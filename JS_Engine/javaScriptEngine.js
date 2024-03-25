// JavaScript Engine

function jsengine(code) {
  return code.split(/\s+/);
}

jsengine('var a = 5');

// interpreter vs compiler
function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5, 4);
}

// Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).

// Typescript is a superset of Javascript that compiles down to Javascript.

// Both of these do exactly what compilers do: Take one language and convert into a different one!

//JIT Compiler => interpreter + compiler

//Writing optimized code
// eval()
// arguments
// for in
// with
// delete
// Hidden classes
// Inline caching

//github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
//https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html

// Inline Caching
https: function findUser() {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: 'Desmond',
  lastName: 'Fernando',
};

findUser(userData);

//Hidden Classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// differnt order matter the compiler

obj1.a = 30;
obj1.b = 30;
obj2.b = 30;
obj2.a = 30;

//delete also matters
delete obj1.a;

// https://webassembly.org/
