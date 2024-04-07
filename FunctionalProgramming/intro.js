// Main pilars
// Pure FUnctions - separation betweeen data and behaviour
// objects reated are imuatable
// avoid shared states

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};

let amazonHistory = [];

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItem,
  addItemToCart
)(user, { name: 'laptop', price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
  // return Object.assign({}, user, { purchases: item });
}

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItem(user) {
  amazonHistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}
function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}
function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

amazonHistory;

//Adding a new item
function refundItem() {}

console.log(
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItem,
    addItemToCart
  )(user, { name: 'laptop', price: 200 })
);

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart

// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// Pure functions
// Function has to always return the same output given the same input
// and the function cannot modify anything outside

// No side effects
const array = [1, 2, 3];
// Following function has side effects
function mutateArray(arr) {
  arr.pop();
}
mutateArray(array);
console.log(array); // [1,2]

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}
mutateArray2(array);
console.log(array); // // [1,2,1,1]

// -> Same input --> Same output
