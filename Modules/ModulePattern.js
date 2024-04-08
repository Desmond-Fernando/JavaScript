// Global Scope
//    Module Scope
//      Function Scope
//          Block Scope -  let and const

// Old way of simulating Modules

var globalVariable = '1234';

// IIFE
// Module Pattern
// revealing module pattern
var fightModule = (function (gs) {
  //have access to globalVariable under gs which will not overrite the value in globalVariable
  var harry = 'potter';
  var voldemort = 'He who must not be named';
  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    console.log(attack1);
    console.log(attack2);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  // console.log(fight(harry, voldemort));
  return {
    fight: fight,
  };
})(globalVariable);

var win = fightModule.fight('Sam', 'Tomm');
console.log(win);
