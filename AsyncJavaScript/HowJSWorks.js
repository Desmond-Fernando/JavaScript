const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
  const two = () => {
    console.log('4');
  };
  two();
};

one();

// Recursion to create a stack overflow
function foo() {
  return foo();
}

foo();

////////////////
// call stack
console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP
