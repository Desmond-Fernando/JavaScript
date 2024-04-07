//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(20);
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(20));
console.log(multiplyBy5(30));
console.log(multiplyBy5(10));
