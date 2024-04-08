// Object spread operator

// animal object representing ages
const animals = {
  tiger: 34,
  lion: 12,
  monkey: 24,
  bird: 40,
};

// const { tiger, ...rest } = animals;
console.log(tiger); // 34
console.log(rest); // {lion:12, monkey:24}

// This is simalar to array spread operator

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(...array)); // 15;

function objectSpread(p1, p2, p3) {
  console.log(p1); // 34
  console.log(p2); // 12
  console.log(p3); // { monkey: 24, bird: 40 }
}

const { tiger, lion, ...rest } = animals;
objectSpread(tiger, lion, rest);
