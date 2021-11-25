// assertArraysEqual Function: (for testing)
let assertArraysEqual = function(arrayA, arrayB) {
  // eqArrays Function
  const eqArrays = function(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
      return false;
    } else {
      for (let a = 0, b = 0; a < arrayA.length; a++, b++) {
        if (arrayA[a] === arrayB[b]) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    }
  };

  // assertAraysEqual Function
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else if (callback(item) === true) {
      break;
    }
  }
  return results;
};




// Testing:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // output: [ "I've", 'been', 'to', 'Hollywood' ]

console.log('---');

assertArraysEqual((results1.length), (data1.length)); // returns True because 'length' is only 1 value long
assertArraysEqual(results1, data1); // returns False because arrays are not the same