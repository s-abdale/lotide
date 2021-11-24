// assertArraysEqual Function:
let assertArraysEqual = function(arrayA, arrayB) {
  // eqArrays Function:
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

  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};


// without Function:
let without = function(source, itemsToRemove) {
  let removeMe = [];

  for (let a = 0, b = 0; a < source.length; a++, b++) {
    if (source[a] === itemsToRemove[b]) {
      continue;
    } else {
      removeMe.push(source[a]);
    }
  }
  console.log(removeMe);
};





// Test cases

// Basic functionality tests:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


// Check that original array is not modified:
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => passed