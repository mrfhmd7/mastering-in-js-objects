/* const first = { a: 2 };
const second = first ;
// const second = { b: 2 };
if( first === second){
    console.log('They are same');
}
else{
    console.log('Different');
} */

// do no use this method to compare object or array

const first = { a: 5, b: 3, d: 8 };
const second = { a: 5, c: 8, b: 3 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);

// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
  } else {
    return false;
  }
}

const isSame = compareObject(first, second);
console.log(isSame);