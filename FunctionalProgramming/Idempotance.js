// Idempotence:
function notGood() {
  return Math.random();
  // new Date();
}

console.log(notGood());

function good() {
  return 5;
}

console.log(good());

console.log(Math.abs(Math.abs(10)));
