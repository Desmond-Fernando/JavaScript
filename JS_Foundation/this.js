//this
//is the object that the function is a property of
//we can execute the same code for multiple objects

const obj = {
  name: 'Billy',

  sing() {
    return console.log(`lalala ${this.name}`);
  },

  // sing: function() {
  //   return console.log(`lalala ${this.name}`);
  // },

  singAgain() {
    return console.log(`${this.sing()} saing again!!`);
  },
};

obj.singAgain();

function importantPerson() {
  console.log(this.name + '!');
}

const name = 'Sunny';
const objt1 = {
  name: 'Cassy',
  importantPerson: importantPerson,
};

const objt2 = {
  name: 'Jacob',
  importantPerson: importantPerson,
};

importantPerson();
console.log(name);

objt1.importantPerson();

// 1: this gives methods access to their objects
// 2: excecute same code for multiple objects
