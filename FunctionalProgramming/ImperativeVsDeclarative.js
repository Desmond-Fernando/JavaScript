// Imperative Vs Declarative
// Imperative - code is code that tells the machine what to do and how to do it
// Declarative - code tells it what to do and wwhat should happen

const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// Imperative
for (let i = 0; i < array.length; i++) {
  console.log(i);
}

// Declarative
array.forEach((item) => console.log(item));
