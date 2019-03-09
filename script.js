const name = 'Neil Allen';
const numberOfStatesUSA = 52;
let sum = 5 * 4;
function sayHello() {
  console.log('Hello World');
}
sayHello();

const favVegetables = ['Carrot', 'Beetroot', 'Spinach', 'Potato'];
for (let i = 0; i < favVegetables.length; i++) {
  console.log(favVegetables[i]);
}

function checkAge(name, age) {
  if (age < 21) {
    console.log("Sorry " + name + ", you aren't old enough to view this page!");
  } else {
    console.log('Well hello there ' + name + ' I see your ' + age);
  }
}
checkAge('Neil', 45);
checkAge('Jack', 9);
checkAge('Leanne', 44);
checkAge('John', 21)

let friends = [
  { name: 'Mark', age: 45 },
  {
    name: 'Dom',
    age: 50
  },

  {
    name: 'Jack',
    age: 9
  },
  {
    name: 'Rosie',
    age: 12
  }
];

function forAge() {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].age < 21) {
      console.log(`Sorry ${friends[i].name} you are not old enough to enter`);
    } else {
      console.log(
        `OK ${friends[i].name} I can see you are ${
          friends[i].age
        } so you can enter..`
      );
    }
  }
}

forAge();
