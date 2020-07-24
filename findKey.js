const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//CHALLENGE
/* 
  findKey should take in an object and a callback
  findKey should scan the object
  findKey should then return the first key for which the callback returns a truthy    value
  if findKey doesn't find the key, it should return undefined 
*/

const findKey = (object, callback) => {
  for (let key in object){
    if (callback(object[key])){
      return key;
    } 
  }
}

//Test Code I think
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"
