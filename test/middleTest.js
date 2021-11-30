const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');


describe("#middle", () => {
  it("returns true if middle[1, 8, 3] is 8", () => {    
    let midArray = middle([1,8,3]);
    let comparison = [ 8 ];
    assert.isTrue(assertArraysEqual(midArray,comparison));
  });
  it("returns true if [9, 3] === middle[1, 9, 3, 4]", () => {
    let midArray = middle([1,9,3,4]);
    let comparison = [ 9, 3 ];
    assert.isTrue(assertArraysEqual(midArray,comparison));
  });
});