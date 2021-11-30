// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
    // console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return false;
    // console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;