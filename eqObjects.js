// assertEqual Function:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// eqObjects Function:

let eqObjects = function(object1, object2) {

  // If object lengths are the same:
  if ((Object.keys(object1).length) === (Object.keys(object2).length)) {
    let matchingKeyValues = [];
    // Loop through each key of object1
    for (const [key1, value1] of Object.entries(object1)) {
      for (const [key2, value2] of Object.entries(object2)) {
        // Look for matching key:value pairs
        if (value1 === value2) {
          // If it's a match, push to empty array
          matchingKeyValues.push(key2);
        } else {
          continue;
        }
      }
    }
    // console.log(matchingKeyValues)
    
    console.log("Success! The matching keys are " + matchingKeyValues);
    return true;
  } else {
    console.log("Lengths don't match. Comparison is " + false);
    return false;
  }
};



// Test:
console.log("eqObjects Test: ");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

// assertEqual test
console.log("assertEqual Test: ");
assertEqual((eqObjects(ab, ba)), true); // => returns True. it works!





















// Detailed eqObjects Function ('explanation' of the above function):

// let eqObjects = function (object1, object2) {
//   // evaluate if objects are a perfect match
//   /*
//     1. compare number of keys
//     2. compare keys at index
//     3. compare values at each key
//   */

//   // console.log(Object.keys(object1).length) // => returns # of objects correctly

//   // 1. if length is the same:
//   if ((Object.keys(object1).length) === (Object.keys(object2).length)) {
//     let matchingKeyValues = [];

//     console.log("🏁 Starting loop")
//     // 2. loop through keys of object 1
//     for (const [key1, value1] of Object.entries(object1)) {
//       console.log(`👁 looking at key ${key1} value ${value1} of object1`)


//       for (const [key2, value2] of Object.entries(object2)) {
//         console.log(`👁 comparing key1 ${key1} to key2 ${key2} value ${value2} of object2`)


//         if (value1 === value2) {
//           matchingKeyValues.push(key2);
//           console.log(`✅ it's a match! value = ${value2}`)
//         } else {
//           console.log("Within the for loop: " + false) // => can be omitted, just continue the loop
//           // return false;
//           continue;
//         }
//       }
//     }
//     console.log("🗝  The matching keys are: " + matchingKeyValues);
//   } else {
//     console.log("We're outside the for loop: " + false)
//     return false
//   }
// }
// // Test:
// const ab = { a: "1", b: "2" };
// const ba = { a: "1", b: "2" };
// eqObjects(ab, ba); // => true

// // const abc = { a: "1", b: "2", c: "3" };
// // eqObjects(ab, abc); // => false