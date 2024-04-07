const elfFunctions = {
  attack: function () {
    return 'atack with ' + this.weapon;
  },
};

// Without Object.create
function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const sam1 = createElf('Sam', 'bow');
sam1.attack = elfFunctions.attack;
sam1.attack();
const peter1 = createElf('Peter', 'stones');
peter1.attack = elfFunctions.attack;
sam.attack();

// With Object.create
function createElf(name, weapon) {
  //Object.create creates __proto__ link
  let newElf = Object.create(elfFunctions);
  console.log(newElf); // {}
  console.log(newElf.__proto__); // { attack: [Function]}
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const sam = createElf('Sam', 'stones');
console.log(sam.attack());
const peter = createElf('Peter', 'fire');
console.log(peter.attack());
