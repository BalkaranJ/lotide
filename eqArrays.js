const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*
const eqArrays = function(arrayOne, arrayTwo){
  const resultArray = [];
  for(let i = 0; i < arrayOne.length; i++){
      if(arrayOne[i] == arrayTwo[i]){
        resultArray.push(true);
      } else {
        resultArray.push(false);
      }
  }
  return !resultArray.includes(false);
}
*/

const eqArrays = function(arrayOne, arrayTwo){
  if(arrayOne.length !== arrayTwo.length){
    return false;
  } 
  for(let i = 0; i < arrayOne.length; i++){
    if(arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
}


 
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));