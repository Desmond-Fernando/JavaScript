// Scope:
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    console.log(c);
    return function printName() {
      var c = 'c';
      return 'Desmond Fernando';
    };
  };
}
sayMyName()()();
console.log(sayMyName()); //ƒ findName()
console.log(sayMyName()()); //ƒ printName()
console.log(sayMyName()()()); // Desmond Fernando

function printName() {
  var b = 'b';
  return 'Desmond Fernando';
}

function findName() {
  var c = 'c';
  return printName();
}

function sayMyName() {
  var a = 'a';
  return findName();
}

sayMyName();
