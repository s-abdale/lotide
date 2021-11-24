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



// Testing:
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Testing with assertEqual:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS