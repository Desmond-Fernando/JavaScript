const array = [1, 2, 3];
// Following function has side effects
function mutateArray(arr) {
  arr.pop();
}
mutateArray(array);
console.log(array); // [1,2]

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}
mutateArray2(array);
console.log(array); // [1,2,1,1]

// No side effects

const array1 = [1, 2, 3];
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

const array2 = removeLastItem(array1); // [1,2]
const array3 = multiplyBy2(array1); // [2,4,6]
console.log(array1, array2, array3); // [1,2,3] [1,2] [2,4,6]

// This is not a pure function
function a() {
  console.log('hi');
}

a();

// Referential Tranparency
function add(num1, num2) {
  return num1 + num2;
}

function mul(num) {
  return num * 2;
}

mul(add(2, 3)); // 10
mul(5); // 10

// Pefect Function should do
// 1. Only one task
// 2. return Statement
// 3. Pure
// 4. No Shared States
// 5. Immutable State
// 6. Composable
// 7. Predictable
