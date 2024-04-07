// Arity means number of arguments a function take

const compose = (f, g) => (data) => f(g(data)); // arity of 2
const multiplyBy3 = (num) => num * 3; // arity of 1
