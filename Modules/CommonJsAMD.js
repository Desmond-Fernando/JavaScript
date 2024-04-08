// CommonJS and AMD (Asynchronous Module Definition)

var module1 = require('module1'); // fight
var fight = require('module1').fight;
var module2 = require('module2'); // importedFunctions

function fight() {}

module.exports = {
  fight: fight,
};

// browserify script.js >>> bundle.js
// webpack

// AMD
// with the help of require.js

define(['module1', 'module2'], function (moduleImport1, moduleImport2) {
  var fight = require('moduleImport1').fight;
  var module2 = require('moduleImport2'); // importedFunctions

  function fight() {}

  module.exports = {
    dance: dance,
  };
});

// UMD -> Universal Module Definition
