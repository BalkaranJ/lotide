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

module.exports = middle;