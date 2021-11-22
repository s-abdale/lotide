// assertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// head function:
const head = function(array) {
  return array[0];
};
/* Testing the head function:
console.log(head([1, 2, 3])); // returns 1
console.log(typeof head([1, 2, 3])) // returns Number 
console.log(head(["Book"])); // returns Book 
console.log(head([])); // returns undefined */



// Testing:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head(["Book"]), "Book");