//Inheritance
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
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
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

class King extends Ogre {
  constructor(name, weapon, color) {
    super(name, weapon, color);
  }

  rule() {
    return 'King is ruling the elf world';
  }
}

console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));

console.log(dolby instanceof Elf);
console.log(dolby instanceof Ogre);
console.log(dolby instanceof Character);

const elfKing = new King('King', 'Sword', 'Red');
elfKing.attack();
elfKing.makeFort();
elfKing.rule();
