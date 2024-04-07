// Partial Application
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));

//Curried Version

const multiply1 = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a * b * c;
console.log(curriedMultiply(5)(4)(10));
