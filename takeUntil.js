//takeUntil will take in two parameters
// the array it will work with
// the callback
//takeUntil should return, a slice of the array with elements taken from the beginning
// it should keep going until the callback/predicate returns a truthy value

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = (array, callback) => {
  let newArray = [];
  for (let element of array){
    if (callback(element)){
      return newArray;
    } else {
      newArray.push(element);
    }
  }
}
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
this is x => x < 0 written as a function declaration
const test = function(x){
  return x < 0;
}
*/ 


