const assertEqual = function(actual, expected){
  if(actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arrayToSlice){
  return arrayToSlice.slice(1);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
let newTail = tail(words); // no need to capture the return value since we are not checking it
assertEqual(newTail.length, 3); // original array should still have 3 elements!