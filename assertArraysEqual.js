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


module.exports = assertArraysEqual;