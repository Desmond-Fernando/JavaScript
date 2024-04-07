class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} Attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  //Polymorphism
  attack(cry) {
    return `Attack with ` + cry;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  //Polymorphism
  attack() {
    return `Arghhhhhhh.. `;
  }

  makeFort() {
    return 'Strongest fort in the world made...';
  }
}

const dolby = new Elf('Dolby', 'Cloth', 'House');
console.log(dolby);
console.log(dolby.attack());

console.log('--------------');

const shrek = new Ogre('Shrek', 'Club', 'green');
console.log(shrek);
console.log(shrek.attack());
console.log(shrek.makeFort());
