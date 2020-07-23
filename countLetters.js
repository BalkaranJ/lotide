const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//PsuedoCode
//Function should take in a sentence (string)
//Function should return a count of each letters in the sentence


const countLetters = function(allLetters){
  const results = {};

  for (const letters of allLetters){
   if(results[letters]){
    results[letters] += 1;
   } else {
     results[letters] = 1;
   }
  }
  return results;
}

console.log(countLetters("lighthouse in the house"));
