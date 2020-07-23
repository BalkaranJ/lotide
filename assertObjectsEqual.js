const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for(let key in object1){
    if(Array.isArray(object1[key])){
      if(!eqArrays(object1[key], object2[key])){
        return false;
      }
    } else {
    if(object1[key] !== object2[key]){
      return false;
    }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected){
  if(eqObjects(actual, expected)){
    console.log("The objects are equal");
  } else {
    console.log("The objects are not equal");
  }
}

let objectOne = {a: 1, b: 2};
let objectTwo = {a: 1, b: 3};


assertObjectsEqual(objectOne, objectTwo);