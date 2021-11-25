// eqObjects Function:

let eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) === (Object.keys(object2).length)) {
    let matchingKeyValues = [];
    for (const [key1, value1] of Object.entries(object1)) {
      for (const [key2, value2] of Object.entries(object2)) {
        if (value1 === value2) {
          matchingKeyValues.push(key2);
        } else {
          continue;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};



// assertObjectsEqual Function:

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement eqObjects
  if (eqObjects(actual, expected)) {
    console.log(`✅ Pass! ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚨 Fail. ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// Test:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba); // returns: Pass
assertObjectsEqual(ab, abc); // returns: Fail