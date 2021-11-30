// eqArrays function:
const eqArrays = require('./eqArrays');

let assertArraysEqual = function(arrayA, arrayB) {
  // assertAraysEqual Function
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

module.exports = assertArraysEqual;