// 5;
// true;
// 'string to be or not to be';
// undefined;
// null;
// Symbol('just me');
// {}

//Primitive //A data Only represents a single value
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof 'string to be or not to be'); // string
console.log(typeof undefined); // undefined; // absence of definiton
console.log(typeof null); // object - incorrrect replresentaiton by the origin// absence of value
console.log(typeof Symbol('just me')); // symbol

//Non-Primitive // Does not contain the actual value directly
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function // is really and object

function a() {
  return 5;
}

a.hi = 'hiiiiii';
console.log(a.hi);

// Built-in Objects

true.toString(); //'true' // Silently use the wrapper behind the scene

Boolean(true).toString();
