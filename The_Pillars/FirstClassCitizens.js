// Functions are first class citizens in JS (as if any javascript types) - Becuse functions can be pass around like data coz its an object in JS
// Functions are data

// Reasons
// 1 - Can be assigned to a vaiable
var stuff = function () {};

// 2 - Being able to pass as paramter like data
function a(fn) {
  fn();
}

a(function () {
  console.log('Hi there!');
});

// 3 - a function can return a another function as values
function b() {
  return function c() {
    console.log('bye');
  };
}

b()();

var d = b();
d();
