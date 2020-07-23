const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//PseudoCode
//This function takes in an object and a value
//It should scan the object and return the first key wich contains the given value
//If no key with that given value is found, then it should return

const findKeyByValue = function(object, movieTitle){
  let genre = '';
  for (let key in object){
    if(movieTitle === object[key]){
      genre = key;
    } else {
      genre = undefined;
    }
  }
  return genre;
}
//hi 

//TEST tTVShCODE
const besowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
