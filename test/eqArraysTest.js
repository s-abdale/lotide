const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');

// Testing:
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Testing with assertEqual:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS