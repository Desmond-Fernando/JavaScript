const elf = {
  name: 'Orwell',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  },
};

const elf2 = {
  name: 'Sally',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  },
};

elf.attack();
elf2.attack();

// Factory Functions
function createElf(name, weapon) {
  return {
    // name: name,
    // weapon: weapon, // Using ES6 syntax you can remove value if the name and value is same
    name,
    weapon,
    attack() {
      return 'attack with ' + weapon;
    },
  };
}

const peter = createElf('Peter', 'stones');
peter.attack();
const sam = createElf('Sam', 'fire');
sam.attack();
