// Compose and Pipe
// Composability is a system design principle that deals with the realtionship between components

// data -->  fn --> data --> fn --> ....

// Compose and Pipe
// refer ramda library for funcational programming

const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
const absoluteAndmultiplyBy3 = compose(makePositive, multiplyBy3);

console.log(multiplyBy3AndAbsolute(-50));
console.log(absoluteAndmultiplyBy3(-50));

fn1(fn2(fn3(50)));
// Applies left to right
compose(fn1, fn2, nf3)(50);
//Applies right to left
pipe(fn3, fn2, fn1)(50);
