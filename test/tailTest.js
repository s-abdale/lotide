const assert = require('chai').assert;
const tail = require('../tail.js');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

describe("#tail", () => {
  it("returns true if tail is 'Labs'", () => {    
    let tailOne = tail(["Hello", "Lighthouse", "Labs"]);
    let comparison = "Labs";
    assert.isTrue(assertEqual(tailOne, comparison));
  });
  it("returns true if tail is 'Lighthouse Labs Friends'", () => {
    let tailTwo = tail(["Yo Yo", "Lighthouse", "Labs","Friends"]);
    let comparison = [ 'Lighthouse', 'Labs', 'Friends' ]
    assert.isTrue(assertArraysEqual(tailTwo, comparison)); 
  });
});