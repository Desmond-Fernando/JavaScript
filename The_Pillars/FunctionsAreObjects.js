function one() {
  return 1;
}

one();

const obj = {
  // two: function() {
  //   return 2;
  // }
  two() {
    // ES6 version
    return 2;
  },
};

obj.two();

function three() {
  return 3;
}

three.call();

// const four = new Function('num', 'return num');
const four = new Function('return 4');
// four(4);
four();

//functions are callable object
function wooho() {
  console.log('woohooooo');
}

wooho.yell = 'ahahhhh';

//Creates kind of following object
// const specialObj = {
//   yell: 'ahahhhh',
//   name: 'wooho',
//   (): console.log('woohooooo')
// }

// follwing bits and pecices are possible in callable objects

// somefunc()
//   code()
//   name (Optional)
//   properties
//     .call()
//     .apply()
//     .bind()

// This is why functions can be passed around like data
