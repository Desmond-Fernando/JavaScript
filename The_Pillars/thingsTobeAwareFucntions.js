// Do not initilialize in side loop. rather initialize outiside and call the function.

function a() {
  console.log('Hi');
}

for (let i = 0; i < 5; i++) {
  // not inline declation of function like bellow
  // function a() {
  //   console.log('Hi');
  // }

  a();
}

// Use defined paramters/vaiable omit reference error by going upwords scope chain
function b(param = 6) {
  // Default paramters
  return param;
}

b();
