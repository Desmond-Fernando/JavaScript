// Function scope
// vs
// block scope

if (5 > 4) {
  var secret = '12345';
}

secret;

// need to change var to const or let enable block scoping.

if (5 > 4) {
  const secret1 = '12345';
}

// secret1; //have not access

function loop() {
  for (var i = 1; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

loop();

//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
