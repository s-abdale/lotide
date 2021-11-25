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

// Scenario:
const words = ["ground", "control", "to", "major", "tom"];

// map Function:
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Testing:
const results1 = map(words, word => word[0]);
console.log(results1); // returns [ 'g', 'c', 't', 'm', 't' ]
const results2 = map(words, word => word.length);
console.log(results2); // returns [ 6, 7, 2, 5, 3 ]
const results3 = map(words, word => word[word.length - 1]);
console.log(results3); // returns [ 'd', 'l', 'o', 'r', 'm' ]
const results4 = map(words, word => word);
console.log(results4); // returns [ 'ground', 'control', 'to', 'major', 'tom' ]
assertArraysEqual(results1, words); // returns False
assertArraysEqual(results4, words); // returns True