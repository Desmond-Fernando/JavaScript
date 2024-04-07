//Constructor Functions
function Elf(name, weapon) {
  console.log(this); // Elf { attack: λ, build: λ, build1: λ }
  this.name = name;
  this.weapon = weapon;
  console.log(this); // Elf { name: 'Sam', weapon: 'bow', attack: λ, build: λ, build1: λ }
}

console.log(Elf.prototype); // Elf { constructor: λ:Elf }
Elf.prototype.attack = function () {
  return 'atack with ' + this.weapon;
};

Elf.prototype.build = function () {
  const self = this;
  function building() {
    return self.name + ' builds a house';
  }
  return building();
};

Elf.prototype.build1 = function () {
  function building() {
    return this.name + ' builds a houseeeee';
  }
  return building.bind(this)();
};

const sam = new Elf('Sam', 'bow');
console.log(sam.__proto__); // Elf { attack: λ, build: λ, build1: λ, constructor: λ:Elf }
console.log(Elf.prototype); // Elf { attack: λ, build: λ, build1: λ, constructor: λ:Elf }
console.log(sam.prototype); // undefined
const peter = new Elf('Peter', 'bow');
console.log(sam.attack()); // 'atack with bow'
console.log(peter.build()); //  'Peter builds a house'
console.log(peter.build1()); // 'Peter builds a houseeeee'

const Elf1 = new Function(
  'name',
  'weapon',
  `this.name = name;
  this.weapon = weapon;`
);

Elf1.prototype.attack = function () {
  return 'attack with ' + this.weapon;
};

// Cannot write with Lambda functions as it is lexically scoped but if you you function which is Dynamically scoped. meaning lexicaly -> where it is written, dyynamically -> who/object is calling
// Elf1.prototype.attack = () => {
//   return 'attack with ' + this.weapon;
// };

Elf1.prototype.build = function () {
  return 'build with ' + this.name;
};

const sarah = new Elf1('Sarah', 'fireworks');
console.log(sarah.name);

/////////////
var a = new Number(5);
console.log(typeof a);

var b = 5;
console.log(typeof b);

console.log(a == b);
console.log(a === b);

// technically everything JS is Object except
// null and undefined
