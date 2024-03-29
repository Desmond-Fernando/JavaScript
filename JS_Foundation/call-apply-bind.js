function a() {
  console.log('hi');
}

a.call();
a();
//this is a() === a.call() === a.apply()
a.apply();

const wizard = {
  name: 'Merlin',
  health: 100,
  // heal() {
  //   return (this.health = 100);
  // },
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: 'Robin hood',
  health: 30,
};
console.log('1', archer);

wizard.heal.call(archer, 50, 30);
wizard.heal.apply(archer, [50, 30]);
// difference is call will take paramters individually but apply will accept an array

console.log('2', archer);

// bind()
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log('3', archer);

//Excersize

const array = [1, 2, -3, 3];

function getMaxNumber(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    console.log(i, '---', arr[i]);
    if (max < arr[i]) {
      console.log(i + '-', arr[i]);
      max = arr[i];
    }
  }
  return max;
}

const max = getMaxNumber(array);
// should return 3
console.log(max);

//Using apply to borough a method from Math Object
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));

// function currying

function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo); // returns a function
multiplyByTwo(4); // 8 is the ourput

const multiplyByTen = multiply.bind(this, 10);
multiplyByTen(24); // 240
