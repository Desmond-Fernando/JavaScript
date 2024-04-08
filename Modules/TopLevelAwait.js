const response = await fetch('https://jsonplaceholder.typicode.com/users');

const data = await response.json();

console.log(data);

// error/output you get should be this:
// SyntaxError: await is only valid in async functions and the top level bodies of modules

// The key to remember with this feature is that you can ONLY use the await keyword at the top level (without async function) inside of a module! Luckily for us, we just learned what a module is!

// const script2 = require('./script2');
// import { largeNumner } from './script2'

let a;
if (1 === 1) {
  const { largeNumber } = await import('./script2');
  a = largeNumber;
}

const b = 7;

console.log(a, b);

// in script2.js
export const largeNumber = 456;

// module.exports = {
//   largeNumber: largeNumber
// }
