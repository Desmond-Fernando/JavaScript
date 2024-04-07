function addTo80(n) {
  console.log(' takes long time for normal implementation');
  return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log(' takes long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
console.log('3', memoizedAddTo80(6));

///////////////

// let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
console.log(cache);
// console.log('-----------')
console.log(2, memoized(6));
