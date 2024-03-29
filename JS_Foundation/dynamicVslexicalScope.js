// const a = function () {
//   console.log(this);

//   const b = function () {
//     console.log(this);

//     const c = {
//       hi: function () {
//         console.log(this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };

// a();

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this);
    };
    return anotherFunc();
  },
};

const obj1 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function () {
      console.log('b', this);
    };
    return anotherFunc();
  },
};

const obj2 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function () {
      console.log('b', this);
    };
    return anotherFunc.bind(this);
  },
};

const obj3 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var self = this;
    var anotherFunc = function () {
      console.log('b', self);
    };
    return anotherFunc;
  },
};

obj.sing()();
// obj3.sing()();
