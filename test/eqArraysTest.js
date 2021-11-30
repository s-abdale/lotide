const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual');


describe("#eqArrays", () => {
  it("returns true for equal arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false for unequal arrays", () => {
    assert.notStrictEqual(["1", "2", "3"], ["1", "2", 3]); 
  });
  it("returns true when eqArrays comparison is tested by assertEqual", () => {
    assert.isTrue(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
  });
});