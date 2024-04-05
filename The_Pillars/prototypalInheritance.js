const array = [];

array.__proto__; // Base Array
array.__proto__.__proto__; // Base Object

function a() {}

a.__proto__; // Base function
a.__proto__.__proto__; // Base Object

const obj1 = {};

obj1.__proto__; // base Object

//Java uses Clasical Inheritance
//JavaScript uses Prototypal Inheritance

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

// Prototypal Inheritance
lizard.__proto__ = dragon;
lizard.sing();
lizard.fire;
dragon.isPrototypeOf(lizard);
lizard.isPrototypeOf(dragon);

for (let prop in lizard) {
  // this will print only what is defined inside lizard object
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }

  // This will print all the properties of it own and going up the chain
  console.log(prop);
}

///////////////////////////

const obj = { name: 'Sally' };
obj.hasOwnProperty('name');
// true
obj.hasOwnProperty('hasOwnProperty'); // false

function a() {}
a.hasOwnProperty('call'); // false
a.hasOwnProperty('bind'); // false
a.hasOwnProperty('apply'); // false
// false
a.hasOwnProperty('name');
// true

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.__proto__;
// f () { [native code] }

multiplyBy5.__proto__ = Function.prototype;
// proto is just a reference to up the chain prototype

const array1 = [];
array1.hasOwnProperty('map');
// false
array1.__proto__.hasOwnProperty('map');
// true
Array.prototype;
// [constructor: f]
array1.__proto__;
// [constructor: f]

/////// Creating inhertance without __proto__
// Using Object.create

let human = {
  mortal: true,
};
let socrates = Object.create(human);
socrates.age = 45;
console.log(human.isPrototypeOf(socrates));

// Only functions have the prototype property

multiplyBy5.prototype;
// f () { [native code] }
Function.prototype;
// f () { [native code] }

multiplyBy5.__proto__.__proto__;
// is equavalent to
Object.prototype;

multiplyBy5.__proto__.__proto__.__proto__;
// null

const obj2 = {};
obj2.prototype;
//undefined

const arr = [];
arr.prototype;
//undefined

'string'.prototype;
//undefined

String.prototype;
//will refer the base prototype properties

const myDate = new Date('1900-10-10');
myDate.lastYear = () => {
  return myDate.getFullYear() - 1;
};

// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.

Date.prototype.lastYear = function () {
  // you can not use arraw function bcause then 'this' keyword will be lexically scoped
  console.log(this);
  return this.getFullYear() - 1; // this will say who called me or which object called me
};
new Date('1900-10-10').lastYear();
//'1899'

// #Bonus
// Modify .map() to print'emoji' at the end of each iteration.
Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    // here 'this' referes to what ever object/array call s this method - [1, 2, 3].map() left to dot is the object calling the method
    arr.push(this[i] + '🗺️');
  }
  return arr;
};
console.log([1, 2, 3].map());
