// assertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// tail function:
let tail = function(tail) {
  return tail.slice(1);
};

// Test Case: Check new array
let result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(tail(["Hello", "Lighthouse", "Labs"])); // returns: [ 'Lighthouse', 'Labs' ] - is true
assertEqual(result.length, 2); // ensure we get back two elements - is true
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse" - is true
assertEqual(result[1], "Labs"); // ensure second element is "Labs" - is true
assertEqual(result[0], "Labs"); // testing falsy - is false

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! - returns ✅ Assertion Passed: 3 === 3
console.log(words); // returns [ 'Yo Yo', 'Lighthouse', 'Labs' ]