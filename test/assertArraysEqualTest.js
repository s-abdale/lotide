const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js');

describe("#assertArraysEqual", () => {
  it("returns false for unequal arrays", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });
  it("returns true for equal arrays", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3])); 
  });
  it("returns false for unequal arrays", () => {
    assert.isFalse(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); 
  });
});