let view;

// Making the function to run only one with closure
// Kind of singleton
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = '⛰️';
      called++;
      console.log('View has been set!');
    }
  };
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);

//Second example

// const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log('I am at index ' + i);
  }, 3000);
}

const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  const currentIndex = i;
  setTimeout(() => {
    console.log('I am at index ' + array[currentIndex]);
  }, 3000);
}

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log('I am at index ' + array[i]);
  }, 3000);
}

//Using closure
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log('I am at index ' + array[closureI]);
    }, 3000);
  })(i);
}
