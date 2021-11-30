const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

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