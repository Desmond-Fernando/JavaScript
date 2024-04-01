console.log(1 == '1'); // true
console.log(1 === '1'); // false

if (1) {
  console.log(5);
}

// 1 => true

console.log(false == '');
console.log(false == []);
console.log(false == {});
console.log('' == 0);
console.log('' == []);
console.log('' == {});
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);

console.log(false === '');
console.log(false === []);
console.log(false === {});
console.log('' === 0);
console.log('' === []);
console.log('' === {});
console.log(0 === []);
console.log(0 === {});
console.log(0 === null);
