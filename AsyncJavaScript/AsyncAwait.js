// Part of ES8 and built on top of Promises which part of ES6

// ASYNC AWAIT
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

async function playerStart() {
  const fisrtMove = await movePlayer(100, 'Left'); // Pause
  await movePlayer(400, 'Left'); // Pause
  await movePlayer(10, 'Right'); // Pause
  await movePlayer(330, 'Left'); // Pause
}

// Converting follwing Promise into async await
fetch('https://jsonplaceholder.cypress.io/users')
  .then((resp) => resp.json())
  .then((data) => console.log(data));

async function fetchUser() {
  const resp = await fetch('https://jsonplaceholder.cypress.io/users');
  const data = await resp.json();
  console.log(data);
}

// fetchUser();

const urls = [
  'https://jsonplaceholder.cypress.io/users',
  'https://jsonplaceholder.cypress.io/posts',
  'https://jsonplaceholder.cypress.io/albums',
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch('oops');

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};

getData();
