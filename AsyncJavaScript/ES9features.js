// finally block
const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4',
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((people) => people.json());
  })
)
  .then((results) => {
    console.log('1', results[0]);
    console.log('2', results[1]);
    console.log('3', results[2]);
    console.log('4', results[4]);
  })
  .catch((err) => console.log('please fix it', err))
  .finally(() => console.log('extra'));

// for await of

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
  } finally {
    console.log('Done');
  }
};

getData();

const urlss = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/postss',
  'https://jsonplaceholder.typicode.com/albums',
];

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urlss) {
    console.log(url);
  }
};

const getData2 = async function () {
  const arrayOfPromises = urlss.map((url) => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  for await (const request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
  //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
};
