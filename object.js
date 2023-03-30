// 1. create object using object literals
const player = {};
player.name = "Mr. X";
player.specialty = "Batsman";
player.bat = function () {
  console.log("Swing the bat");
};
// console.log(player);
// player.bat();

const student = {
  name: "Mr. Y",
  job: "To To company",
  ball: function () {
    console.log("Throw the ball");
  },
  salary: 10000,
};
// console.log(student);

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
const item = Object.create(null);
// console.log(item);
const atel = Object.create(student);
// console.log(atel.name);

// 4. class
class Person {
  name = "Abul";
  address = "Sodor ghat";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(56);
// console.log(person1);

// 5. function
function Car(model, price) {
  this.model = model;
  this.price = price;
}
const tesla = new Car("Elon", 44);
console.log(tesla);
