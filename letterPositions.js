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



// letterPositions Function:
const letterPositions = function(sentence) {
  let results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i);
    // letter = each letter in the string (NOT the index)

    // no spaces!
    if (letter !== " ") {
      // check if array has letter
      if (results[letter]) {
        // if there's a key in results that matches the letter in the string, push letter to results, and index to that letter
        results[letter].push(i);
      } else {
        // if there's no key in results that matches letter, push letter to results, and give it a starting value of index "i" in an array
        results[letter] = [i];
      }

    }

  }
  return results;
};






// Test cases:

console.log(letterPositions("Name Hi")); // should return: { N: [ 0 ], a: [ 1 ], m: [ 2 ], e: [ 3 ], H: [ 5 ], i: [ 6 ] }

const result1 = letterPositions("hello");
console.log(result1); // should return: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
assertArraysEqual(result1["h"], [0]); // => should return True
assertArraysEqual(result1["e"], [1]); // => should return True
assertArraysEqual(result1["l"], [2, 3]); // => should return True
assertArraysEqual(result1["o"], [4]); // => should return True
assertArraysEqual(result1["o"], [2]); // => should return False