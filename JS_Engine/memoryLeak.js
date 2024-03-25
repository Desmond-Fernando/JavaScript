// Memory Leak
let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

// Global variable;

var a = 1;
var b = 1;
var c = 1;

// Event Listeners

var element = document.getElementById('button');
element.addEventListener('click', onclick);

// SetInterval

setInterval(() => {
  //referencing objects
});

//https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications
//https://developer.mozilla.org/en-US/docs/Web/API/setInterval
