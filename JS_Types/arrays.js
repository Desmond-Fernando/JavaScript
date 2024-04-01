var array = ['1', '2', '3'];

var array1 = {
  0: '1',
  1: '2',
  2: '3',
};

// this is the reason why type of [] is an object

typeof array; // object

Array.isArray(array); // will return true
