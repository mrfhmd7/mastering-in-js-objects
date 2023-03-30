const numbers = [12, 54, 65, 23, 43, 9];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not used with objects

const bottle = { color: "yellow", price: 150, isCleaned: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
/* 
3 ways to read object properties
i. bottle.color  #this is a dot notation
ii. bottle['color']
iii. bottle[key] // key is a property name #this is a bracket notation
*/

// for of loop
for (const key of keys) {
  // console.log(key, bottle[key]);
}

//for in loop
for (const key in bottle) {
  const value = bottle[key];
  console.log(key, value);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}

/* 
১। কোন Object এর উপর লুপ চালাতে হলে for in মারতে হবে
২। কোন array এর উপর লুপ চালাতে হলে for of মারতে হবে
*/