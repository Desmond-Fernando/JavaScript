// Call stack + Memory Heap

const number = 400; // allocate memory for number
const string = 'some text'; // allocate memory for number
const person = {
  // allocate memory for an object... and its values
  first: 'Desmond',
  last: 'Fernando',
};

//Call stack

function substract(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return substract(sumTotal);
}

calculate();
