// assertEqual function:
const assertEqual = require('./assertEqual');

// tail function:
let tail = function(tail) {
  return tail.slice(1);
};

module.exports = tail;