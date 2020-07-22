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

//PsuedoCode
//implement a function called middle
//middle will take in an array 
//middle will return the absolute middle element of the array
//If there is no middle, it should return an empty array
//If there is an odd number of elements, return the middle most element
//if there is an even number of elements, return an array containing the two elements in the middle



 /* exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let a = Math.floor(exampleArray.length / 2);
*/

const middle = function(arrayOne){
  if(arrayOne.length <= 2){
    return [];
  } else if(arrayOne.length % 2 === 1){
    let middleOdd = Math.floor(arrayOne.length / 2);
    return [arrayOne[middleOdd]];
  } else {
    let middleOdd = Math.floor(arrayOne.length / 2);
    let firstNumber = arrayOne[middleOdd - 1];
    let secondNumber = arrayOne[middleOdd];
    return [firstNumber, secondNumber];
  }
}

//test code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));// => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]