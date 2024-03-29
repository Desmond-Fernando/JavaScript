function printName() {
  return 'Desmond Fernando';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName();

// Execution Context

// printName();
// findName();
// sayMyName();
// global() ===> Global Execution Context
// Global Object + this
// in browser => global === window
