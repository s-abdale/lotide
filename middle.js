// assertArraysEqual Function:
const assertArraysEqual = require('./assertArraysEqual');

// middle Function:
let middle = function(array) {
  let output = [];

  if ((array.length % 2) === 0) {
    // even condition:
    let middleOne = ((array.length / 2) - 1); // calculates first middle index
    let middleTwo = (array.length / 2); // calculates second middle index;
    output.push(array[middleOne], array[middleTwo]);
  } else {
    // odd condition:
    let median = Math.floor(array.length / 2); // calculates median index
    output.push(array[median]); // pushes value at index
  }
  // console.log(output);
  return output;
};

module.exports = middle;