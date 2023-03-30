const bottle = { color: "yellow", price: 150, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
console.log(bottle);
delete bottle.isCleaned;
bottle.price = 1500;
bottle.height = 12;
console.log(bottle);

/* 
here we discuss about keys, value, freeze, seal, entries
 */
