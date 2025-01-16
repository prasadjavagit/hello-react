// async function tester() {
//   try {
//     const value = await new Promise((res, rej) => {
//       setTimeout(() => rej(new Error('Something went wrong')), 1000);
//     });
//     console.log(value);
//   } catch (error) {
//     console.log('oh no ' + error);
//   }
// }
// tester();

var age = 30;
var person = {
  name: 'prasad',
  age: 40,
  details: {
    hobbies: ['cricket', 'cooking'],
    location: 'India',
  },
  greet: function () {
    console.log('Hello, I am ' + this.age + ' years old');
  },
};
person.greet();
