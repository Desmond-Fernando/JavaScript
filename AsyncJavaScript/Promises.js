// A promise is an object that may produce a single value some time in the future either a resolved value, or a reason that it's not resolved(rejected)
// A promise that can be in three possible states
// - fullfiled, resolved, rejected

//Call back
el.addEventListener('click', submitForm);

// Callback pyramid of doom
movePlayer(100, 'Left', function () {
  movePlayer(400, 'Left', function () {
    movePlayer(10, 'Right', function () {
      movePlayer(330, 'Left', function () {});
    });
  });
});

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

/// Promises
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff worked');
  } else {
    reject('Error, it broke');
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hiii');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Pookie');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Is that the feature that you are looking for??');
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// promise.then((result) => console.log(result));
promise
  .then((result) => result + '!')
  .then((result2) => {
    throw Error;
    result2 + '?';
    console.log(result2);
  })
  .catch(() => console.log('Errorrr!')) // This should be always the last one other wise bellow ones will not be caught
  .then((result3) => {
    console.log(result3 + '!');
  });

///////
grabTweets('twitter/desmondfernando', (error, desmondTweets) => {
  if (error) {
    throw Error;
  }
  diplayTweets(desmondTweets);
  grabTweets('twitter/andrei', (error, andreiTweets) => {
    if (error) {
      throw Error;
    }
    diplayTweets(andreiTweets);
    grabTweets('twitter/elonmusk', (error, elonTweets) => {
      if (error) {
        throw Error;
      }
      diplayTweets(elonTweets);
    });
  });
});

//////////////////

const urls = [
  'https://jsonplaceholder.cypress.io/users',
  'https://jsonplaceholder.cypress.io/posts',
  'https://jsonplaceholder.cypress.io/albums',
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
