// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays Function
let eqArrays = function(arrayA, arrayB) {

  let arrayAString = arrayA.join('-');
  let arrayBString = arrayB.join('-');

  if (arrayAString === arrayBString) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};



// Testing:
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Testing with assertEqual:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS