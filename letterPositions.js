//Return all the indices(zero-based positions) in the string where each character is found

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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let char = sentence[i];
    if(results[char]){
      results[char].push(i);
    } else {
       results[char] = [i];
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);