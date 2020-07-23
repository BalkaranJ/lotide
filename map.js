//map will take in two arguments
// an array to map
// a callback function
//map needs to return a new array based on the results of the callback function
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

const assertArraysEqual = function(arrayThree, arrayFour){
  if(eqArrays(arrayThree, arrayFour)){
    console.log("The arrays are equal");
  } else {
    console.log("The arrays are not equal");
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
