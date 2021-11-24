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

  // assertAraysEqual Function
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};



// middle Function:
let middle = function(array) {
  let output = [];

  if ((array.length % 2) === 0) {
    // even condition:
    let middleOne = ((array.length / 2) - 1); // calculates first middle index
    let middleTwo = (array.length / 2); // calculates second middle index;
    output.push(array[middleOne], array[middleTwo]);
  } else {
    // odd condition:
    let median = Math.floor(array.length / 2); // calculates median index
    output.push(array[median]); // pushes value at index
  }
  console.log(output);
};



// Testing:
let sampleArray = [9,8,7,6];

// Test 1
console.log("Test 1: run middle function:");
middle([1,8,3]); // returns: [8] => it works!
middle([1,9,3,4]); // returns: [9, 3] => it works!
middle(sampleArray); // returns: [8, 7] => it works!

// Test 2
console.log("Test 2: confirm assertArraysEqual still works:");
assertArraysEqual([1, 2, 3], [1, 2, 3]); // returns: Assertion Passed => it works!

// Test 3
console.log("Test 3: verify that original array hasn't been changed by middle, with assertArraysEqual:");
assertArraysEqual([9,8,7,6], sampleArray); // returns: Assertion Passed => middle doesn't change the original array, it works!