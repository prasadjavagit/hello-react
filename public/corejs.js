// const butts1 = document.querySelector('.hot');
// const butts2 = document.querySelector('.cool');

// butts1.addEventListener('click', function () {
//   console.log(this);
//   console.log('it got clicked');
// });
// butts2.addEventListener('click', function () {
//   console.log('it got clicked');
// });

// function Animal(name, age) {
//   console.log(this);
//   const obj = {};
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }
// new Animal('prasad', 30);

function Circle(radius) {
  console.log(this);
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}
const another = Circle(1);
