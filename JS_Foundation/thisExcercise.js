var b = {
  name: 'Jay',
  say() {
    console.log(this);
  },
};

var c = {
  name: 'Jay',
  say() {
    return function () {
      // dynamically scoped
      console.log(this);
    };
  },
};

var d = {
  name: 'Jay',
  say() {
    return () => console.log(this); // lexically scoped
  },
};

b.say(); // b object will be refered

c.say()(); // window object

d.say()(); // d object will be refered

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
