// assertEqual Function
const assertEqual = require('./assertEqual');

// eqArrays Function
let eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  } else {
    for (let a = 0, b = 0; a < arrayA.length; a++, b++) {
      if (arrayA[a] === arrayB[b]) {
        continue;
      } else {
        console.log(false);
        return false;
      }
    }
    console.log(true);
    return true;
  }
};

module.exports = eqArrays;